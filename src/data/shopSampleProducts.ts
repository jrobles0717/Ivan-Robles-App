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
// Images are sample mockup photos (public/assets/shop/*.jpg), not final
// product photography — swap them once real merch photos exist.
export const sampleProducts: SampleProduct[] = [
  {
    id: "sample-tour-tee",
    title: "IROB Tour Tee — White",
    price: 28,
    sizes: ["S", "M", "L", "XL"],
    image: "/assets/shop/tour-tee.jpg",
  },
  {
    id: "sample-snapback",
    title: "IROB Logo Snapback",
    price: 22,
    sizes: ["One Size"],
    image: "/assets/shop/snapback.jpg",
  },
  {
    id: "sample-playa-tank",
    title: "Fiesta en la Playa Tank",
    price: 24,
    sizes: ["S", "M", "L"],
    image: "/assets/shop/playa-tank.jpg",
  },
  {
    id: "sample-hoodie",
    title: "IROB Hoodie",
    price: 48,
    sizes: ["S", "M", "L", "XL"],
    image: "/assets/shop/hoodie.jpg",
  },
];
