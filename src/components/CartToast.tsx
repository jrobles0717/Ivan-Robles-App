import { Box, Button, HStack, Text } from "@chakra-ui/react";

import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartToast = () => {
  const { notification, openCart, dismissNotification } = useCart();

  return (
    <Box
      position="fixed"
      top={{ base: "84px", md: "100px" }}
      left="50%"
      transform={
        notification
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(-16px)"
      }
      opacity={notification ? 1 : 0}
      pointerEvents={notification ? "auto" : "none"}
      transition="all 0.28s cubic-bezier(0.22, 1, 0.36, 1)"
      zIndex={1500}
      bg="#0f1a26"
      border="1px solid rgba(102,217,255,0.24)"
      boxShadow="0 16px 40px rgba(0,0,0,0.45)"
      borderRadius="full"
      pl={4}
      pr={2}
      py={2}
      maxW="92vw"
    >
      <HStack gap={3}>
        <HStack gap={2}>
          <Box as={FaCheckCircle} color="#3ecf8e" flexShrink={0} />
          <Text color="white" fontSize="sm" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
            {notification} added to cart
          </Text>
        </HStack>
        <Button
          size="xs"
          bg="#00aaff"
          color="white"
          borderRadius="full"
          flexShrink={0}
          _hover={{ bg: "#008ecc" }}
          onClick={() => {
            openCart();
            dismissNotification();
          }}
        >
          View Cart
        </Button>
      </HStack>
    </Box>
  );
};

export default CartToast;
