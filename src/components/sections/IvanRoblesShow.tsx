import {
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaYoutube } from "react-icons/fa";

const IvanRoblesShow = () => {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(180deg, #0b1018 0%, #0d1520 45%, #101214 100%)"
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 8 }}
      color="white"
    >
      {/* Decorative glows */}
      <Box
        position="absolute"
        top="-100px"
        right="-80px"
        width={{ base: "220px", md: "320px" }}
        height={{ base: "220px", md: "320px" }}
        borderRadius="full"
        bg="rgba(0, 170, 255, 0.12)"
        filter={{ base: "none", md: "blur(90px)" }}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-120px"
        left="-100px"
        width={{ base: "240px", md: "340px" }}
        height={{ base: "240px", md: "340px" }}
        borderRadius="full"
        bg="rgba(0, 38, 185, 0.10)"
        filter={{ base: "none", md: "blur(100px)" }}
        pointerEvents="none"
      />

      <Box maxW="1380px" mx="auto" position="relative" zIndex={1}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 10, lg: 12 }}
          alignItems="center"
        >
          {/* LEFT SIDE - IMAGE / VISUAL CARD */}
          <Box data-aos="fade-right">
            <Box position="relative" maxW="620px" mx="auto">
              <Box
                position="absolute"
                inset="-18px"
                borderRadius="30px"
                bg="rgba(0, 170, 255, 0.10)"
                filter="blur(22px)"
              />

              <Box
                position="relative"
                borderRadius="28px"
                overflow="hidden"
                bg="rgba(255,255,255,0.05)"
                border="1px solid rgba(255,255,255,0.10)"
                backdropFilter={{ base: "none", md: "blur(14px)" }}
                boxShadow="0 20px 60px rgba(0,0,0,0.35)"
              >
                {/* Top bar */}
                <Box
                  px={{ base: 4, md: 5 }}
                  py={4}
                  borderBottom="1px solid rgba(255,255,255,0.08)"
                  bg="rgba(255,255,255,0.03)"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flexWrap="wrap"
                  gap={3}
                >
                  <HStack gap={3}>
                    <Box
                      width="10px"
                      height="10px"
                      borderRadius="full"
                      bg="#00aaff"
                      boxShadow="0 0 14px rgba(0,170,255,0.8)"
                    />
                    <Text
                      fontSize="sm"
                      color="#66d9ff"
                      fontWeight="bold"
                      letterSpacing="0.08em"
                      textTransform="uppercase"
                    >
                      Featured Show
                    </Text>
                  </HStack>

                  <Badge
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="rgba(0,170,255,0.14)"
                    color="#66d9ff"
                    border="1px solid rgba(102,217,255,0.24)"
                  >
                    House Boutique
                  </Badge>
                </Box>

                {/* Main image area */}
                <Box p={{ base: 4, md: 5 }}>
                  <Box
                    borderRadius="24px"
                    overflow="hidden"
                    bg="rgba(255,255,255,0.03)"
                    border="1px solid rgba(255,255,255,0.08)"
                    position="relative"
                  >
                    <Box
                      position="absolute"
                      inset={0}
                      bg="linear-gradient(to top, rgba(8,12,20,0.35), rgba(8,12,20,0.05))"
                      pointerEvents="none"
                    />

                    <Image
                      src="/assets/house-boutique-logo-1.jpeg"
                      alt="House Boutique Logo"
                      objectFit="contain"
                      mx="auto"
                      w="100%"
                      maxH={{ base: "320px", md: "420px" }}
                      bg="white"
                      p={{ base: 4, md: 6 }}
                      transition="transform 0.35s ease"
                      _hover={{
                        transform: "scale(1.03)",
                      }}
                    />
                  </Box>

                  <SimpleGrid columns={3} gap={3} mt={4}>
                    <Box
                      textAlign="center"
                      px={3}
                      py={3}
                      borderRadius="xl"
                      bg="whiteAlpha.50"
                      border="1px solid rgba(255,255,255,0.08)"
                    >
                      <Text color="#66d9ff" fontSize="10px" mb={1}>
                        STYLE
                      </Text>
                      <Text color="white" fontWeight="bold" fontSize="sm">
                        House Music
                      </Text>
                    </Box>

                    <Box
                      textAlign="center"
                      px={3}
                      py={3}
                      borderRadius="xl"
                      bg="whiteAlpha.50"
                      border="1px solid rgba(255,255,255,0.08)"
                    >
                      <Text color="#66d9ff" fontSize="10px" mb={1}>
                        LOCATION
                      </Text>
                      <Text color="white" fontWeight="bold" fontSize="sm">
                        San Juan
                      </Text>
                    </Box>

                    <Box
                      textAlign="center"
                      px={3}
                      py={3}
                      borderRadius="xl"
                      bg="whiteAlpha.50"
                      border="1px solid rgba(255,255,255,0.08)"
                    >
                      <Text color="#66d9ff" fontSize="10px" mb={1}>
                        FORMAT
                      </Text>
                      <Text color="white" fontWeight="bold" fontSize="sm">
                        Mix Show
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <Stack
            gap={6}
            textAlign={{ base: "center", lg: "left" }}
            align={{ base: "center", lg: "flex-start" }}
          >
            <Badge
              px={4}
              py={1.5}
              borderRadius="full"
              bg="rgba(255,255,255,0.06)"
              color="#66d9ff"
              border="1px solid rgba(102, 217, 255, 0.24)"
              backdropFilter={{ base: "none", md: "blur(8px)" }}
              fontSize="0.78rem"
              letterSpacing="0.08em"
              textTransform="uppercase"
              data-aos="fade-up"
            >
              Signature Experience
            </Badge>

            <Box data-aos="fade-up" data-aos-delay="100">
              <Heading
                as="h2"
                fontWeight="extrabold"
                lineHeight={{ base: "1.08", md: "1.02" }}
                fontSize={{ base: "2.4rem", md: "3.4rem", xl: "4rem" }}
                textShadow="2px 4px 18px rgba(0, 0, 0, 0.35)"
              >
                The Ivan Robles Show
              </Heading>

              <Box
                mt={3}
                height="4px"
                width={{ base: "180px", md: "240px" }}
                borderRadius="full"
                bg="linear-gradient(90deg, #00aaff 0%, #66d9ff 100%)"
                mx={{ base: "auto", lg: "0" }}
              />
            </Box>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.300"
              maxW="620px"
              lineHeight="1.85"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              Experience the electrifying beats of Ivan Robles at{" "}
              <Box as="span" color="white" fontWeight="bold">
                House Boutique
              </Box>
              . Tune in to the ultimate mix show featuring the best of house
              music, live from San Juan, Puerto Rico. Don’t miss the energy,
              rhythm, and signature sound that keeps the crowd moving.
            </Text>

            <HStack
              gap={3}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              data-aos="fade-up"
              data-aos-delay="260"
            >
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
                fontWeight="medium"
              >
                Live Mixes
              </Badge>
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
                fontWeight="medium"
              >
                House Boutique
              </Badge>
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
                fontWeight="medium"
              >
                San Juan, PR
              </Badge>
            </HStack>

            <Box
              p={{ base: 4, md: 5 }}
              borderRadius="24px"
              bg="rgba(255,255,255,0.04)"
              border="1px solid rgba(255,255,255,0.08)"
              boxShadow="0 12px 30px rgba(0,0,0,0.22)"
              data-aos="fade-up"
              data-aos-delay="320"
            >
              <Text
                color="gray.300"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.8"
              >
                A curated blend of beats, nightlife energy, and exclusive
                vibes—designed for everyone who loves the sound and atmosphere
                of a true house music experience.
              </Text>
            </Box>

            <HStack
              gap={4}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Button
                gap={2}
                bg="#00aaff"
                color="white"
                size="lg"
                px={8}
                borderRadius="full"
                boxShadow="0 10px 28px rgba(0, 170, 255, 0.28)"
                _hover={{
                  bg: "#008ecc",
                  transform: "translateY(-2px)",
                  boxShadow: "0 14px 34px rgba(0, 170, 255, 0.35)",
                }}
                transition="all 0.3s ease"
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/@IvanRoblesmusic",
                    "_blank"
                  );
                }}
              >
                <FaYoutube />
                Watch Now
              </Button>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default IvanRoblesShow;
