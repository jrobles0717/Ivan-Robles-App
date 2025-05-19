import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        // Define your custom colors here
        brand: {
          50: { value: "#e6f2ff" },
          100: { value: "#bfdeff" },
          // Add more color shades as needed
        },
      },
      // You can add other token customizations here
    },
    semanticTokens: {
      colors: {
        // Define semantic tokens if needed
        brand: {
          solid: { value: "{colors.brand.500}" },
          fg: { value: "{colors.brand.700}" },
        },
      },
    },
  },
});
