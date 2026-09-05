import {
  Badge,
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FaShoppingBag, FaTshirt } from "react-icons/fa";
import Seo from "../components/common/Seo";
import { useCart } from "../context/CartContext";
import { sampleProducts, type SampleProduct } from "../data/shopSampleProducts";
import { getProducts, isShopifyConfigured } from "../lib/shopify";
import type { ShopifyProduct, ShopifyVariant } from "../types/shopify";

const money = (amount: string | number, currency = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(Number(amount));

const cardStyle = {
  position: "relative" as const,
  borderRadius: "24px",
  overflow: "hidden" as const,
  bg: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.30)",
};

const SizePicker = ({
  sizes,
  selected,
  onSelect,
}: {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
}) => (
  <Stack direction="row" gap={1.5} flexWrap="wrap">
    {sizes.map((size) => (
      <Box
        key={size}
        as="button"
        onClick={() => onSelect(size)}
        px={2.5}
        py={1}
        borderRadius="md"
        fontSize="0.72rem"
        fontWeight="bold"
        border="1px solid"
        borderColor={
          size === selected ? "#66d9ff" : "rgba(255,255,255,0.18)"
        }
        color={size === selected ? "#66d9ff" : "gray.400"}
        bg={size === selected ? "rgba(0,170,255,0.14)" : "transparent"}
        transition="all 0.2s ease"
      >
        {size}
      </Box>
    ))}
  </Stack>
);

const SampleProductCard = ({ product }: { product: SampleProduct }) => {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      key: `${product.id}-${size}`,
      productId: product.id,
      title: product.title,
      size,
      price: product.price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Box {...cardStyle}>
      <Badge
        position="absolute"
        top="12px"
        left="12px"
        zIndex={1}
        px={2.5}
        py={1}
        borderRadius="full"
        bg="rgba(0,0,0,0.55)"
        color="#66d9ff"
        border="1px solid rgba(102,217,255,0.3)"
        fontSize="0.65rem"
        letterSpacing="0.06em"
        textTransform="uppercase"
      >
        Muestra
      </Badge>

      <Box
        h="220px"
        bg="linear-gradient(135deg, rgba(0,170,255,0.14), rgba(255,255,255,0.02))"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FaTshirt size={40} color="#66d9ff" />
      </Box>

      <Stack gap={2.5} p={5}>
        <Heading as="h3" size="sm" color="white">
          {product.title}
        </Heading>
        <Text color="#66d9ff" fontWeight="bold">
          {money(product.price)}
        </Text>

        <SizePicker sizes={product.sizes} selected={size} onSelect={setSize} />

        <Button
          size="sm"
          bg={added ? "#1f8a5f" : "#00aaff"}
          color="white"
          _hover={{ bg: added ? "#1f8a5f" : "#008ecc" }}
          onClick={handleAdd}
        >
          {added ? "Agregado ✓" : "Add to Cart"}
        </Button>
      </Stack>
    </Box>
  );
};

const RealProductCard = ({ product }: { product: ShopifyProduct }) => {
  const { addItem } = useCart();
  const availableVariants = product.variants.filter((v) => v.availableForSale);
  const variants = availableVariants.length ? availableVariants : product.variants;

  const [variant, setVariant] = useState<ShopifyVariant | undefined>(
    variants[0]
  );
  const [added, setAdded] = useState(false);

  if (!variant) return null;

  const sizeOption = variant.selectedOptions.find(
    (opt) => opt.name.toLowerCase() === "size"
  );
  const sizes = Array.from(
    new Set(
      product.variants
        .map((v) => v.selectedOptions.find((o) => o.name.toLowerCase() === "size")?.value)
        .filter((v): v is string => Boolean(v))
    )
  );

  const handleSelectSize = (size: string) => {
    const match = product.variants.find((v) =>
      v.selectedOptions.some(
        (o) => o.name.toLowerCase() === "size" && o.value === size
      )
    );
    if (match) setVariant(match);
  };

  const handleAdd = () => {
    addItem({
      key: variant.id,
      productId: product.id,
      title: product.title,
      size: sizeOption?.value ?? variant.title,
      price: Number(variant.price.amount),
      shopifyVariantId: variant.id,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Box {...cardStyle}>
      <Box
        h="220px"
        bg="rgba(255,255,255,0.03)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        {product.featuredImage ? (
          <img
            src={product.featuredImage.url}
            alt={product.featuredImage.altText ?? product.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <FaShoppingBag size={32} color="#66d9ff" />
        )}
      </Box>

      <Stack gap={2.5} p={5}>
        <Heading as="h3" size="sm" color="white">
          {product.title}
        </Heading>
        <Text color="#66d9ff" fontWeight="bold">
          {money(variant.price.amount, variant.price.currencyCode)}
        </Text>

        {sizes.length > 0 && (
          <SizePicker
            sizes={sizes}
            selected={sizeOption?.value ?? ""}
            onSelect={handleSelectSize}
          />
        )}

        <Button
          size="sm"
          bg={added ? "#1f8a5f" : "#00aaff"}
          color="white"
          _hover={{ bg: added ? "#1f8a5f" : "#008ecc" }}
          disabled={!variant.availableForSale}
          onClick={handleAdd}
        >
          {!variant.availableForSale
            ? "Sold out"
            : added
              ? "Agregado ✓"
              : "Add to Cart"}
        </Button>
      </Stack>
    </Box>
  );
};

const Shop = () => {
  const configured = isShopifyConfigured();

  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(configured);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!configured) return;

    let cancelled = false;

    getProducts()
      .then((result) => {
        if (!cancelled) setProducts(result);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [configured]);

  return (
    <>
      <Seo
        title="Shop | Iván Robles"
        description="Ropa y mercancía oficial de Iván Robles."
        path="/shop"
      />
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        bg="linear-gradient(180deg, #08111b 0%, #0b1420 45%, #0f1012 100%)"
        color="white"
        py={{ base: 16, md: 20 }}
        px={{ base: 5, md: 8 }}
        minH="70vh"
      >
        <Box maxW="1380px" mx="auto" position="relative" zIndex={1}>
          <Stack gap={4} align="center" textAlign="center" mb={12}>
            <Badge
              px={4}
              py={1.5}
              borderRadius="full"
              bg="rgba(255,255,255,0.06)"
              color="#66d9ff"
              border="1px solid rgba(102, 217, 255, 0.22)"
              fontSize="0.75rem"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              IROB Merch
            </Badge>

            <Heading
              as="h1"
              fontWeight="extrabold"
              lineHeight="1.05"
              fontSize={{ base: "2.7rem", md: "4rem", xl: "4.6rem" }}
              textShadow="2px 4px 18px rgba(0, 0, 0, 0.35)"
            >
              Shop
            </Heading>

            <Box
              height="4px"
              width={{ base: "160px", md: "200px" }}
              borderRadius="full"
              bg="linear-gradient(90deg, #00aaff 0%, #66d9ff 100%)"
            />
          </Stack>

          {!configured && (
            <Box
              maxW="720px"
              mx="auto"
              mb={10}
              borderRadius="16px"
              bg="rgba(0,170,255,0.08)"
              border="1px dashed rgba(102,217,255,0.32)"
              px={5}
              py={3.5}
              textAlign="center"
            >
              <Text color="#66d9ff" fontSize="sm">
                Estás viendo productos de muestra. Puedes agregarlos al
                carrito para probar el flujo, pero el pago se activa cuando
                se conecte la tienda real de Shopify.
              </Text>
            </Box>
          )}

          {configured && loading && (
            <Box textAlign="center" py={16}>
              <Spinner color="#00aaff" size="lg" />
            </Box>
          )}

          {configured && !loading && error && (
            <Box
              maxW="640px"
              mx="auto"
              borderRadius="28px"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.10)"
              p={{ base: 8, md: 10 }}
              textAlign="center"
            >
              <Text color="white" fontSize="xl" fontWeight="bold" mb={3}>
                No pudimos cargar el catálogo
              </Text>
              <Text color="gray.400">{error}</Text>
            </Box>
          )}

          {configured && !loading && !error && products.length === 0 && (
            <Box
              maxW="640px"
              mx="auto"
              borderRadius="28px"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.10)"
              p={{ base: 8, md: 10 }}
              textAlign="center"
            >
              <Text color="white" fontSize="xl" fontWeight="bold" mb={3}>
                Aún no hay productos publicados
              </Text>
              <Text color="gray.400">
                Agrega productos en Shopify para que aparezcan aquí.
              </Text>
            </Box>
          )}

          {configured && !loading && !error && products.length > 0 && (
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
              {products.map((product) => (
                <RealProductCard key={product.id} product={product} />
              ))}
            </SimpleGrid>
          )}

          {!configured && (
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={6}>
              {sampleProducts.map((product) => (
                <SampleProductCard key={product.id} product={product} />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Shop;
