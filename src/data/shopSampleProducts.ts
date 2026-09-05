export interface SampleProduct {
  id: string;
  title: string;
  price: number;
  sizes: string[];
  image: string;
}

// Placeholder catalog shown only while no Shopify store is connected
// (see isShopifyConfigured in src/lib/shopify.ts). Swapped automatically
// for the real catalog once VITE_SHOPIFY_STORE_DOMAIN/TOKEN are set.
// Images are brand mockups (public/assets/shop/*.svg), not real product
// photos — swap them for real photography once the merch exists.
export const sampleProducts: SampleProduct[] = [
  {
    id: "sample-tour-tee",
    title: "IROB Tour Tee — Black",
    price: 28,
    sizes: ["S", "M", "L", "XL"],
    image: "/assets/shop/tour-tee.svg",
  },
  {
    id: "sample-snapback",
    title: "IROB Logo Snapback",
    price: 22,
    sizes: ["One Size"],
    image: "/assets/shop/snapback.svg",
  },
  {
    id: "sample-playa-tank",
    title: "Fiesta en la Playa Tank",
    price: 24,
    sizes: ["S", "M", "L"],
    image: "/assets/shop/playa-tank.svg",
  },
  {
    id: "sample-hoodie",
    title: "IROB Hoodie",
    price: 48,
    sizes: ["S", "M", "L", "XL"],
    image: "/assets/shop/hoodie.svg",
  },
];
