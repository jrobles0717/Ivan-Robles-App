import type {
  RawShopifyCart,
  RawShopifyProduct,
  ShopifyCart,
  ShopifyProduct,
} from "../types/shopify";

const STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || "";
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || "";
const API_VERSION = import.meta.env.VITE_SHOPIFY_API_VERSION || "2025-01";

export const isShopifyConfigured = () =>
  Boolean(STORE_DOMAIN && STOREFRONT_TOKEN);

interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!isShopifyConfigured()) {
    throw new Error("Shopify is not configured — missing store domain or token.");
  }

  const res = await fetch(
    `https://${STORE_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  if (!res.ok) {
    throw new Error(`Shopify Storefront API error: ${res.status}`);
  }

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  if (!json.data) {
    throw new Error("Shopify Storefront API returned no data.");
  }

  return json.data;
}

const PRODUCT_FIELDS = /* GraphQL */ `
  id
  handle
  title
  description
  featuredImage {
    url
    altText
    width
    height
  }
  images(first: 6) {
    nodes {
      url
      altText
      width
      height
    }
  }
  priceRange {
    minVariantPrice { amount currencyCode }
    maxVariantPrice { amount currencyCode }
  }
  variants(first: 25) {
    nodes {
      id
      title
      availableForSale
      price { amount currencyCode }
      selectedOptions { name value }
    }
  }
`;

function normalizeProduct(node: RawShopifyProduct): ShopifyProduct {
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    featuredImage: node.featuredImage,
    images: node.images?.nodes ?? [],
    priceRange: node.priceRange,
    variants: node.variants?.nodes ?? [],
  };
}

export async function getProducts(first = 20): Promise<ShopifyProduct[]> {
  const query = /* GraphQL */ `
    query Products($first: Int!) {
      products(first: $first) {
        nodes {
          ${PRODUCT_FIELDS}
        }
      }
    }
  `;

  const data = await shopifyFetch<{ products: { nodes: RawShopifyProduct[] } }>(query, {
    first,
  });

  return data.products.nodes.map(normalizeProduct);
}

export async function getProductByHandle(
  handle: string
): Promise<ShopifyProduct | null> {
  const query = /* GraphQL */ `
    query Product($handle: String!) {
      product(handle: $handle) {
        ${PRODUCT_FIELDS}
      }
    }
  `;

  const data = await shopifyFetch<{ product: RawShopifyProduct | null }>(query, {
    handle,
  });

  return data.product ? normalizeProduct(data.product) : null;
}

const CART_FIELDS = /* GraphQL */ `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount { amount currencyCode }
    totalAmount { amount currencyCode }
  }
  lines(first: 50) {
    nodes {
      id
      quantity
      merchandise {
        ... on ProductVariant {
          id
          title
          product { title handle }
          image { url altText width height }
          price { amount currencyCode }
        }
      }
    }
  }
`;

function normalizeCart(node: RawShopifyCart): ShopifyCart {
  return {
    id: node.id,
    checkoutUrl: node.checkoutUrl,
    totalQuantity: node.totalQuantity,
    cost: node.cost,
    lines: node.lines?.nodes ?? [],
  };
}

export async function createCart(
  merchandiseId: string,
  quantity = 1
): Promise<ShopifyCart> {
  const query = /* GraphQL */ `
    mutation CartCreate($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart {
          ${CART_FIELDS}
        }
        userErrors { message }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartCreate: { cart: RawShopifyCart; userErrors: { message: string }[] };
  }>(query, { lines: [{ merchandiseId, quantity }] });

  if (data.cartCreate.userErrors.length) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join("; "));
  }

  return normalizeCart(data.cartCreate.cart);
}

export async function addCartLine(
  cartId: string,
  merchandiseId: string,
  quantity = 1
): Promise<ShopifyCart> {
  const query = /* GraphQL */ `
    mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          ${CART_FIELDS}
        }
        userErrors { message }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesAdd: { cart: RawShopifyCart; userErrors: { message: string }[] };
  }>(query, { cartId, lines: [{ merchandiseId, quantity }] });

  if (data.cartLinesAdd.userErrors.length) {
    throw new Error(
      data.cartLinesAdd.userErrors.map((e) => e.message).join("; ")
    );
  }

  return normalizeCart(data.cartLinesAdd.cart);
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<ShopifyCart> {
  const query = /* GraphQL */ `
    mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          ${CART_FIELDS}
        }
        userErrors { message }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: RawShopifyCart; userErrors: { message: string }[] };
  }>(query, { cartId, lines: [{ id: lineId, quantity }] });

  if (data.cartLinesUpdate.userErrors.length) {
    throw new Error(
      data.cartLinesUpdate.userErrors.map((e) => e.message).join("; ")
    );
  }

  return normalizeCart(data.cartLinesUpdate.cart);
}

export async function removeCartLine(
  cartId: string,
  lineId: string
): Promise<ShopifyCart> {
  const query = /* GraphQL */ `
    mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          ${CART_FIELDS}
        }
        userErrors { message }
      }
    }
  `;

  const data = await shopifyFetch<{
    cartLinesRemove: { cart: RawShopifyCart; userErrors: { message: string }[] };
  }>(query, { cartId, lineIds: [lineId] });

  if (data.cartLinesRemove.userErrors.length) {
    throw new Error(
      data.cartLinesRemove.userErrors.map((e) => e.message).join("; ")
    );
  }

  return normalizeCart(data.cartLinesRemove.cart);
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const query = /* GraphQL */ `
    query Cart($cartId: ID!) {
      cart(id: $cartId) {
        ${CART_FIELDS}
      }
    }
  `;

  const data = await shopifyFetch<{ cart: RawShopifyCart | null }>(query, {
    cartId,
  });

  return data.cart ? normalizeCart(data.cart) : null;
}
