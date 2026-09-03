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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMixcloud,
  FaSpotify,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";

import { ChakraRouterLink } from "../common/ChakraRouterLink";
import { HiOutlineBell } from "react-icons/hi";
import SocialLink from "../SocialLink";

const Hero = () => {
  return (
    <Box
      position="relative"
      minH={{ base: "100svh", lg: "100vh" }}
      h={{ base: "auto", lg: "100vh" }}
      bg="linear-gradient(180deg, #08111b 0%, #0b1420 45%, #0f0f10 100%)"
      overflow="hidden"
      color="white"
    >
      {/* Background image */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="url('/assets/hero-background.webp')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity={0.2}
      />

      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(90deg, rgba(5,10,18,0.94) 0%, rgba(7,14,24,0.88) 45%, rgba(7,14,24,0.72) 100%)"
      />

      {/* Decorative glows */}
      <Box
        position="absolute"
        top="-120px"
        left="-100px"
        width={{ base: "240px", md: "320px" }}
        height={{ base: "240px", md: "320px" }}
        borderRadius="full"
        bg="rgba(0, 170, 255, 0.14)"
        filter={{ base: "none", md: "blur(100px)" }}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-140px"
        right="-100px"
        width={{ base: "260px", md: "360px" }}
        height={{ base: "260px", md: "360px" }}
        borderRadius="full"
        bg="rgba(0, 38, 185, 0.16)"
        filter={{ base: "none", md: "blur(110px)" }}
        pointerEvents="none"
      />

      <Box
        position="relative"
        zIndex={2}
        maxW="1380px"
        mx="auto"
        h={{ base: "auto", lg: "100vh" }}
        px={{ base: 5, md: 8, xl: 10 }}
        pt={{ base: 24, md: 28, lg: 24 }}
        pb={{ base: 16, md: 16, lg: 8 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 12, lg: 8, xl: 12 }}
          alignItems="center"
          h={{ base: "auto", lg: "100%" }}
        >
          {/* LEFT SIDE */}
          <Stack
            gap={{ base: 5, md: 6, lg: 4 }}
            justify="center"
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            minH={{ lg: "100%" }}
          >
            <Badge
              px={4}
              py={1.5}
              borderRadius="full"
              bg="rgba(255,255,255,0.06)"
              color="#66d9ff"
              border="1px solid rgba(102, 217, 255, 0.22)"
              backdropFilter={{ base: "none", md: "blur(8px)" }}
              fontSize="0.75rem"
              letterSpacing="0.08em"
              textTransform="uppercase"
              data-aos="fade-down"
            >
              DJ • Producer • Puerto Rico
            </Badge>

            <Box data-aos="fade-up" data-aos-delay="120">
              <Text
                color="#66d9ff"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                textTransform="uppercase"
                letterSpacing="0.12em"
                fontWeight="bold"
                mb={2}
              >
                Sounds. Energy. Experience.
              </Text>

              <Heading
                as="h1"
                fontWeight="extrabold"
                letterSpacing="-0.03em"
                lineHeight={{ base: "1.02", lg: "0.95" }}
                fontSize={{
                  base: "3rem",
                  md: "4rem",
                  lg: "clamp(3.8rem, 5vw, 5.2rem)",
                }}
                textShadow="2px 4px 20px rgba(0,0,0,0.35)"
              >
                Ivan Robles
              </Heading>

              <Box
                mt={3}
                width={{ base: "160px", md: "200px", lg: "220px" }}
                height="4px"
                borderRadius="full"
                bg="linear-gradient(90deg, #00aaff 0%, #66d9ff 100%)"
                mx={{ base: "auto", lg: "0" }}
              />
            </Box>

            <Text
              maxW="620px"
              color="gray.200"
              fontSize={{ base: "md", md: "lg", lg: "md", xl: "lg" }}
              lineHeight={{ base: "1.8", lg: "1.75" }}
              data-aos="fade-up"
              data-aos-delay="220"
            >
              Bringing the beats to Puerto Rico and beyond with high-energy
              sets, unforgettable nightlife experiences, and a signature sound
              built to move every crowd.
            </Text>

            <HStack
              gap={3}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              data-aos="fade-up"
              data-aos-delay="320"
            >
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
                fontWeight="medium"
              >
                House Music Producer
              </Badge>
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
                fontWeight="medium"
              >
                Live Events
              </Badge>
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
                fontWeight="medium"
              >
                Music Releases
              </Badge>
            </HStack>

            <HStack
              gap={4}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              data-aos="zoom-in"
              data-aos-delay="420"
            >
              <Button
                bg="#00aaff"
                color="white"
                size="lg"
                px={8}
                borderRadius="full"
                boxShadow="0 10px 30px rgba(0, 170, 255, 0.28)"
                _hover={{
                  bg: "#008ecc",
                  transform: "translateY(-2px)",
                  boxShadow: "0 14px 34px rgba(0, 170, 255, 0.38)",
                }}
                transition="all 0.3s ease"
                onClick={() => {
                  window.open(
                    "/.netlify/functions/latest-release",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <FaSpotify />
                New Releases
              </Button>

              <ChakraRouterLink
                to="/subscribe"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  px={8}
                  borderRadius="full"
                  color="white"
                  borderColor="rgba(255,255,255,0.35)"
                  bg="rgba(255,255,255,0.03)"
                  _hover={{
                    bg: "rgba(255,255,255,0.12)",
                    borderColor: "#66d9ff",
                    color: "#66d9ff",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  <HiOutlineBell />
                  Join the Guest List
                </Button>
              </ChakraRouterLink>
            </HStack>

            <Box
              pt={{ base: 2, lg: 1 }}
              w="100%"
              data-aos="fade-up"
              data-aos-delay="520"
            >
              <Wrap
                gap={{ base: 3, md: 4 }}
                justify={{ base: "center", lg: "flex-start" }}
              >
                <WrapItem>
                  <SocialLink
                    icon={FaFacebook}
                    href="https://www.facebook.com/IROBMUSIC"
                    label="Facebook"
                  />
                </WrapItem>
                <WrapItem>
                  <SocialLink
                    icon={FaInstagram}
                    href="https://instagram.com/djivanrobles"
                    label="Instagram"
                  />
                </WrapItem>
                <WrapItem>
                  <SocialLink
                    icon={FaTiktok}
                    href="https://www.tiktok.com/@ivanroblesmusic"
                    label="TikTok"
                  />
                </WrapItem>
                <WrapItem>
                  <SocialLink
                    icon={FaYoutube}
                    href="https://youtube.com/c/ivanroblesmusic"
                    label="YouTube"
                  />
                </WrapItem>
                <WrapItem>
                  <SocialLink
                    icon={FaTwitch}
                    href="https://www.twitch.com/djivanrobles"
                    label="Twitch"
                  />
                </WrapItem>
                <WrapItem>
                  <SocialLink
                    icon={FaMixcloud}
                    href="https://www.mixcloud.com/ivanrobles"
                    label="Mixcloud"
                  />
                </WrapItem>
                <WrapItem>
                  <SocialLink
                    icon={FaSpotify}
                    href="https://open.spotify.com/artist/08J3Z1fG0FL98AkVqiRBMn"
                    label="Spotify"
                  />
                </WrapItem>
                <WrapItem>
                  <SocialLink
                    icon={FaEnvelope}
                    href="mailto:ivan@ivanroblesmusic.com"
                    label="Email"
                  />
                </WrapItem>
              </Wrap>
            </Box>
          </Stack>

          {/* RIGHT SIDE */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            h={{ base: "auto", lg: "100%" }}
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <Box
              position="relative"
              w="100%"
              maxW={{ base: "440px", md: "480px", lg: "460px", xl: "520px" }}
              maxH={{ lg: "calc(100vh - 120px)" }}
            >
              <Box
                position="absolute"
                inset="-16px"
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
                backdropFilter={{ base: "none", md: "blur(12px)" }}
                boxShadow="0 20px 60px rgba(0,0,0,0.35)"
              >
                {/* IMAGE AREA */}
                <Box
                  position="relative"
                  height={{
                    base: "320px",
                    md: "360px",
                    lg: "300px",
                    xl: "360px",
                  }}
                  overflow="hidden"
                >
                  <Image
                    src="/assets/ivan-robles-hero-pic.jpg"
                    alt="Ivan Robles"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    fetchPriority="high"
                  />

                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(to top, rgba(8,12,20,0.92), rgba(8,12,20,0.18) 45%, rgba(8,12,20,0.08))"
                  />

                  <Badge
                    position="absolute"
                    top="16px"
                    left="16px"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    bg="#00aaff"
                    color="white"
                    boxShadow="0 0 18px rgba(0,170,255,0.35)"
                  >
                    Live Experience
                  </Badge>

                  <Box
                    position="absolute"
                    bottom="18px"
                    left="18px"
                    right="18px"
                  >
                    <Text
                      color="#66d9ff"
                      fontSize="xs"
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                      fontWeight="bold"
                      mb={1}
                    >
                      Music • Events • Energy
                    </Text>
                    <Heading
                      as="h2"
                      size={{ base: "md", md: "lg" }}
                      color="white"
                    >
                      Bringing every crowd to life
                    </Heading>
                  </Box>
                </Box>

                {/* INFO AREA */}
                <Stack gap={4} p={{ base: 4, md: 5 }}>
                  <Box
                    px={4}
                    py={2.5}
                    borderRadius="2xl"
                    bg="rgba(255,255,255,0.04)"
                    border="1px solid rgba(255,255,255,0.08)"
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        maxWidth: "240px",
                        display: "block",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    >
                      <source src="/assets/IROB-Logo.mp4" type="video/mp4" />
                    </video>
                  </Box>

                  <SimpleGrid columns={3} gap={3}>
                    <Box
                      textAlign="center"
                      px={2}
                      py={3}
                      borderRadius="xl"
                      bg="whiteAlpha.50"
                      border="1px solid rgba(255,255,255,0.08)"
                    >
                      <Text color="#66d9ff" fontSize="10px" mb={1}>
                        BASED IN
                      </Text>
                      <Text color="white" fontWeight="bold" fontSize="sm">
                        Puerto Rico
                      </Text>
                    </Box>

                    <Box
                      textAlign="center"
                      px={2}
                      py={3}
                      borderRadius="xl"
                      bg="whiteAlpha.50"
                      border="1px solid rgba(255,255,255,0.08)"
                    >
                      <Text color="#66d9ff" fontSize="10px" mb={1}>
                        STYLE
                      </Text>
                      <Text color="white" fontWeight="bold" fontSize="sm">
                        House Music Producer
                      </Text>
                    </Box>

                    <Box
                      textAlign="center"
                      px={2}
                      py={3}
                      borderRadius="xl"
                      bg="whiteAlpha.50"
                      border="1px solid rgba(255,255,255,0.08)"
                    >
                      <Text color="#66d9ff" fontSize="10px" mb={1}>
                        FOCUS
                      </Text>
                      <Text color="white" fontWeight="bold" fontSize="sm">
                        Live Events
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Stack>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Hero;
