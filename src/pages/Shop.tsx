import { Badge, Box, Heading, Stack, Text } from "@chakra-ui/react";

import { FaTshirt } from "react-icons/fa";
import Seo from "../components/common/Seo";
import { isShopifyConfigured } from "../lib/shopify";

const Shop = () => {
  const configured = isShopifyConfigured();

  return (
    <>
      <Seo
        title="Shop | Iván Robles"
        description="Ropa y mercancía oficial de Iván Robles — próximamente."
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

          {!configured ? (
            <Box
              maxW="640px"
              mx="auto"
              borderRadius="28px"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.10)"
              boxShadow="0 20px 60px rgba(0,0,0,0.35)"
              p={{ base: 8, md: 10 }}
              textAlign="center"
            >
              <Box
                mx="auto"
                mb={5}
                w="64px"
                h="64px"
                borderRadius="full"
                bg="rgba(0,170,255,0.14)"
                border="1px solid rgba(102,217,255,0.24)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaTshirt size={26} color="#66d9ff" />
              </Box>

              <Text
                color="white"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                mb={3}
              >
                La tienda está en construcción
              </Text>
              <Text color="gray.400" maxW="460px" mx="auto" lineHeight="1.8">
                Muy pronto vas a poder comprar camisas y mercancía oficial de
                Iván Robles directo desde aquí. Vuelve pronto.
              </Text>
            </Box>
          ) : (
            <Text color="gray.400" textAlign="center">
              Catálogo próximamente.
            </Text>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Shop;
