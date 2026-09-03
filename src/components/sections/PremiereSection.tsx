import {
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaYoutube } from "react-icons/fa";
import React from "react";
import YouTubePlayer from "../YouTubePlayer";

const PremiereSection: React.FC = () => {
  const premiereVideoId = import.meta.env.VITE_PREMIERE_VIDEO_ID || "";

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(180deg, #0a1018 0%, #0d1622 45%, #101010 100%)"
      color="white"
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 8 }}
    >
      {/* Decorative glows */}
      <Box
        position="absolute"
        top="-100px"
        left="-80px"
        width={{ base: "220px", md: "320px" }}
        height={{ base: "220px", md: "320px" }}
        borderRadius="full"
        bg="rgba(0, 170, 255, 0.14)"
        filter={{ base: "none", md: "blur(90px)" }}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-100px"
        width={{ base: "260px", md: "360px" }}
        height={{ base: "260px", md: "360px" }}
        borderRadius="full"
        bg="rgba(0, 38, 185, 0.12)"
        filter={{ base: "none", md: "blur(100px)" }}
        pointerEvents="none"
      />

      <Box maxW="1380px" mx="auto" position="relative" zIndex={1}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 10, lg: 12 }}
          alignItems="center"
        >
          {/* LEFT CONTENT */}
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
              Featured Premiere
            </Badge>

            <Box data-aos="fade-up" data-aos-delay="100">
              <Heading
                as="h2"
                fontWeight="extrabold"
                lineHeight={{ base: "1.08", md: "1.02" }}
                fontSize={{ base: "2.4rem", md: "3.6rem", xl: "4.2rem" }}
                textShadow="2px 4px 18px rgba(0, 0, 0, 0.35)"
              >
                Watch the Premiere
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
              Join the exclusive premiere of DJ Ivan Robles&apos; latest music
              video and experience the electrifying sound, visuals, and energy
              behind the newest release.
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
                New Release
              </Badge>
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
                fontWeight="medium"
              >
                Official Video
              </Badge>
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
                fontWeight="medium"
              >
                YouTube Premiere
              </Badge>
            </HStack>

            <HStack
              gap={4}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              data-aos="zoom-in"
              data-aos-delay="340"
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
                Subscribe on YouTube
              </Button>
            </HStack>
          </Stack>

          {/* RIGHT CONTENT / VIDEO CARD */}
          <Box data-aos="fade-left" data-aos-delay="180">
            <Box position="relative" maxW="720px" mx="auto">
              <Box
                position="absolute"
                inset="-18px"
                borderRadius="28px"
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
                {/* Top Label */}
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
                      Now Premiering
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
                    Exclusive Release
                  </Badge>
                </Box>

                {/* Player Area */}
                <Box p={{ base: 4, md: 5 }}>
                  {premiereVideoId ? (
                    <Box
                      borderRadius="20px"
                      overflow="hidden"
                      boxShadow="0 12px 30px rgba(0,0,0,0.28)"
                    >
                      <YouTubePlayer videoId={premiereVideoId} />
                    </Box>
                  ) : (
                    <Box
                      minH={{ base: "240px", md: "380px" }}
                      borderRadius="20px"
                      border="1px dashed rgba(102,217,255,0.28)"
                      bg="rgba(255,255,255,0.03)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                      px={6}
                    >
                      <Stack gap={3} align="center">
                        <Text fontSize="lg" fontWeight="bold" color="white">
                          Premiere video coming soon
                        </Text>
                        <Text color="gray.400" maxW="420px">
                          Add your YouTube video ID to
                          <Box
                            as="span"
                            color="#66d9ff"
                            fontWeight="semibold"
                            ml={2}
                          >
                            VITE_PREMIERE_VIDEO_ID
                          </Box>{" "}
                          to display the embedded premiere here.
                        </Text>
                      </Stack>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default PremiereSection;
