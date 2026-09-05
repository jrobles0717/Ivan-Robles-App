import { Box, HStack, Text } from "@chakra-ui/react";

import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const money = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );

// Thumb-friendly alternative to the small nav icon — shows up only on
// mobile, only once there's something in the cart.
const MobileCartBar = () => {
  const { totalQuantity, subtotal, openCart } = useCart();

  if (totalQuantity === 0) return null;

  return (
    <Box
      as="button"
      onClick={openCart}
      position="fixed"
      left={4}
      right={4}
      bottom={4}
      zIndex={1300}
      display={{ base: "block", md: "none" }}
      borderRadius="full"
      bg="#00aaff"
      color="white"
      boxShadow="0 12px 32px rgba(0, 170, 255, 0.4)"
      px={5}
      py={3.5}
    >
      <HStack justify="space-between">
        <HStack gap={2}>
          <FaShoppingBag />
          <Text fontWeight="bold" fontSize="sm">
            {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
          </Text>
        </HStack>
        <HStack gap={2}>
          <Text fontWeight="bold" fontSize="sm">
            {money(subtotal)}
          </Text>
          <Text fontSize="sm" opacity={0.85}>
            · View Cart
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default MobileCartBar;
