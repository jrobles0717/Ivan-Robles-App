import { Box, Button, HStack, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaMinus, FaPlus, FaShoppingBag, FaTimes, FaTrash } from "react-icons/fa";
import { useMemo, useState } from "react";

import type { CartLineItem } from "../context/CartContext";
import { createCart } from "../lib/shopify";
import { createPortal } from "react-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const money = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );

interface ProductGroup {
  productId: string;
  title: string;
  lines: CartLineItem[];
}

const CartDrawer = () => {
  const {
    items,
    updateQuantity,
    removeItem,
    subtotal,
    isCheckoutEligible,
    isDrawerOpen: isOpen,
    closeCart: onClose,
  } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const navigate = useNavigate();

  const groups = useMemo(() => {
    const map = new Map<string, ProductGroup>();
    for (const item of items) {
      const existing = map.get(item.productId);
      if (existing) {
        existing.lines.push(item);
      } else {
        map.set(item.productId, {
          productId: item.productId,
          title: item.title,
          lines: [item],
        });
      }
    }
    return Array.from(map.values());
  }, [items]);

  const handleCheckout = async () => {
    setCheckingOut(true);
    setCheckoutError(null);

    try {
      const lines = items.map((item) => ({
        merchandiseId: item.shopifyVariantId as string,
        quantity: item.quantity,
      }));
      const cart = await createCart(lines);
      window.location.href = cart.checkoutUrl;
    } catch (err) {
      setCheckoutError(
        err instanceof Error ? err.message : "No se pudo iniciar el pago"
      );
      setCheckingOut(false);
    }
  };

  const handleContinueShopping = () => {
    onClose();
    navigate("/shop");
  };

  return createPortal(
    <>
      <Box
        position="fixed"
        inset={0}
        bg="rgba(0,0,0,0.6)"
        zIndex={1400}
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? "auto" : "none"}
        transition="opacity 0.25s ease"
        onClick={onClose}
      />

      <Box
        position="fixed"
        top={0}
        right={0}
        h="100%"
        w={{ base: "100%", sm: "380px" }}
        bg="#0b1420"
        borderLeft="1px solid rgba(255,255,255,0.10)"
        boxShadow="-20px 0 60px rgba(0,0,0,0.5)"
        zIndex={1401}
        transform={isOpen ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)"
        display="flex"
        flexDirection="column"
      >
        <HStack
          justify="space-between"
          px={5}
          py={4}
          borderBottom="1px solid rgba(255,255,255,0.08)"
        >
          <Heading size="md" color="white">
            Your Cart
          </Heading>
          <IconButton
            aria-label="Close cart"
            size="sm"
            variant="ghost"
            color="white"
            onClick={onClose}
          >
            <FaTimes />
          </IconButton>
        </HStack>

        <Stack flex={1} overflowY="auto" px={5} py={4} gap={5}>
          {groups.length === 0 ? (
            <Stack
              align="center"
              justify="center"
              flex={1}
              color="gray.500"
              py={16}
              gap={4}
            >
              <FaShoppingBag size={28} />
              <Text>Your cart is empty</Text>
              <Button
                size="sm"
                variant="outline"
                borderColor="rgba(102,217,255,0.3)"
                color="#66d9ff"
                borderRadius="full"
                _hover={{ bg: "rgba(0,170,255,0.1)" }}
                onClick={handleContinueShopping}
              >
                Seguir comprando
              </Button>
            </Stack>
          ) : (
            groups.map((group) => (
              <Box
                key={group.productId}
                borderBottom="1px solid rgba(255,255,255,0.06)"
                pb={4}
              >
                <Text color="white" fontWeight="bold" fontSize="sm" mb={3}>
                  {group.title}
                </Text>

                <Stack gap={3}>
                  {group.lines.map((item) => (
                    <HStack
                      key={item.key}
                      align="start"
                      justify="space-between"
                      pl={3}
                      borderLeft="2px solid rgba(102,217,255,0.25)"
                    >
                      <Box>
                        <Text color="gray.400" fontSize="xs">
                          Size: {item.size}
                        </Text>
                        <Text color="#66d9ff" fontSize="sm" mt={1}>
                          {money(item.price)}
                          {item.quantity > 1 && (
                            <Text as="span" color="gray.500">
                              {" "}
                              c/u
                            </Text>
                          )}
                        </Text>
                        {item.quantity > 1 && (
                          <Text color="white" fontWeight="bold" fontSize="sm">
                            {money(item.price * item.quantity)}
                          </Text>
                        )}
                      </Box>

                      <Stack align="end" gap={2}>
                        <HStack gap={2}>
                          <IconButton
                            aria-label="Decrease quantity"
                            size="xs"
                            variant="outline"
                            borderColor="rgba(255,255,255,0.2)"
                            color="white"
                            onClick={() =>
                              updateQuantity(item.key, item.quantity - 1)
                            }
                          >
                            <FaMinus />
                          </IconButton>
                          <Text color="white" minW="18px" textAlign="center">
                            {item.quantity}
                          </Text>
                          <IconButton
                            aria-label="Increase quantity"
                            size="xs"
                            variant="outline"
                            borderColor="rgba(255,255,255,0.2)"
                            color="white"
                            onClick={() =>
                              updateQuantity(item.key, item.quantity + 1)
                            }
                          >
                            <FaPlus />
                          </IconButton>
                        </HStack>
                        <IconButton
                          aria-label="Remove item"
                          size="xs"
                          variant="ghost"
                          color="red.300"
                          onClick={() => removeItem(item.key)}
                        >
                          <FaTrash />
                        </IconButton>
                      </Stack>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            ))
          )}
        </Stack>

        {items.length > 0 && (
          <Box px={5} py={4} borderTop="1px solid rgba(255,255,255,0.08)">
            <HStack justify="space-between" mb={4}>
              <Text color="gray.300">Subtotal</Text>
              <Text color="white" fontWeight="bold">
                {money(subtotal)}
              </Text>
            </HStack>
            <Button
              w="full"
              bg="#00aaff"
              color="white"
              size="lg"
              borderRadius="full"
              disabled={!isCheckoutEligible || checkingOut}
              opacity={isCheckoutEligible ? 1 : 0.6}
              cursor={isCheckoutEligible ? "pointer" : "not-allowed"}
              _hover={isCheckoutEligible ? { bg: "#008ecc" } : {}}
              onClick={handleCheckout}
            >
              {!isCheckoutEligible
                ? "Conecta Shopify para pagar"
                : checkingOut
                  ? "Redirigiendo..."
                  : "Checkout"}
            </Button>

            {checkoutError && (
              <Text color="red.300" fontSize="xs" mt={2} textAlign="center">
                {checkoutError}
              </Text>
            )}
          </Box>
        )}
      </Box>
    </>,
    document.body
  );
};

export default CartDrawer;
