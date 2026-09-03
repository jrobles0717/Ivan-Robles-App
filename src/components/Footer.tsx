import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
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

import { ChakraRouterLink } from "./common/ChakraRouterLink";
import { HiOutlineBell } from "react-icons/hi";
import type { IconType } from "react-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks: { label: string; href: string; icon: IconType }[] = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/IROBMUSIC",
      icon: FaFacebook,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/djivanrobles",
      icon: FaInstagram,
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@ivanroblesmusic",
      icon: FaTiktok,
    },
    {
      label: "YouTube",
      href: "https://youtube.com/c/ivanroblesmusic",
      icon: FaYoutube,
    },
    {
      label: "Twitch",
      href: "https://www.twitch.com/djivanrobles",
      icon: FaTwitch,
    },
    {
      label: "Mixcloud",
      href: "https://www.mixcloud.com/ivanrobles",
      icon: FaMixcloud,
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/08J3Z1fG0FL98AkVqiRBMn",
      icon: FaSpotify,
    },
    {
      label: "Email",
      href: "mailto:ivan@ivanroblesmusic.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <Box
      as="footer"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(180deg, #070d14 0%, #0a111b 42%, #0d0f12 100%)"
      color="white"
      pt={{ base: 16, md: 20 }}
      pb={{ base: 8, md: 10 }}
      px={{ base: 5, md: 8 }}
      borderTop="1px solid rgba(255,255,255,0.06)"
    >
      <Box
        position="absolute"
        top="-100px"
        left="-80px"
        width={{ base: "220px", md: "320px" }}
        height={{ base: "220px", md: "320px" }}
        borderRadius="full"
        bg="rgba(0, 170, 255, 0.10)"
        filter={{ base: "none", md: "blur(90px)" }}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-100px"
        width={{ base: "240px", md: "340px" }}
        height={{ base: "240px", md: "340px" }}
        borderRadius="full"
        bg="rgba(0, 38, 185, 0.10)"
        filter={{ base: "none", md: "blur(100px)" }}
        pointerEvents="none"
      />

      <Box maxW="1380px" mx="auto" position="relative" zIndex={1}>
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          gap={{ base: 10, md: 8 }}
        >
          <Stack
            gap={5}
            align={{ base: "center", xl: "flex-start" }}
            textAlign={{ base: "center", xl: "left" }}
          >
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              p={4}
              borderRadius="24px"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.08)"
              boxShadow="0 16px 40px rgba(0,0,0,0.20)"
            >
              <Image
                src="/assets/irob-logo.png"
                alt="Ivan Robles Logo"
                maxW="90px"
                objectFit="contain"
              />
            </Box>

            <Box>
              <Heading as="h3" size="md" mb={2} color="white">
                DJ Ivan Robles
              </Heading>
              <Text
                color="#66d9ff"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.1em"
                fontWeight="bold"
                mb={3}
              >
                House Music DJ & Producer
              </Text>
              <Text color="gray.400" maxW="360px" lineHeight="1.8">
                Bringing music, energy, and unforgettable nightlife experiences
                to Puerto Rico and beyond.
              </Text>
            </Box>

            <HStack
              gap={4}
              flexWrap="wrap"
              justify={{ base: "center", xl: "flex-start" }}
            >
              <ChakraRouterLink
                to="/subscribe"
                px={6}
                py={3}
                borderRadius="full"
                bg="#00aaff"
                color="white"
                fontWeight="semibold"
                display="inline-flex"
                alignItems="center"
                gap={2}
                boxShadow="0 10px 28px rgba(0, 170, 255, 0.28)"
                _hover={{
                  textDecoration: "none",
                  bg: "#008ecc",
                  transform: "translateY(-2px)",
                  boxShadow: "0 14px 34px rgba(0, 170, 255, 0.35)",
                }}
                transition="all 0.3s ease"
              >
                <Icon as={HiOutlineBell} boxSize={5} flexShrink={0} />
                Subscribe
              </ChakraRouterLink>

              <Link
                href="mailto:ivan@ivanroblesmusic.com"
                px={6}
                py={3}
                borderRadius="full"
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.10)"
                color="white"
                fontWeight="semibold"
                display="inline-flex"
                alignItems="center"
                gap={2}
                _hover={{
                  textDecoration: "none",
                  bg: "rgba(255,255,255,0.08)",
                  color: "#66d9ff",
                  borderColor: "rgba(102,217,255,0.24)",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s ease"
              >
                <Icon as={FaEnvelope} />
                Contact
              </Link>
            </HStack>
          </Stack>

          <Stack
            gap={4}
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text color="white" fontWeight="bold" fontSize="lg">
              Quick Links
            </Text>

            <ChakraRouterLink
              to="/"
              color="gray.300"
              _hover={{ textDecoration: "none", color: "#66d9ff" }}
            >
              Home
            </ChakraRouterLink>

            <ChakraRouterLink
              to="/about"
              color="gray.300"
              _hover={{ textDecoration: "none", color: "#66d9ff" }}
            >
              About Me
            </ChakraRouterLink>

            <ChakraRouterLink
              to="/subscribe"
              color="gray.300"
              _hover={{ textDecoration: "none", color: "#66d9ff" }}
            >
              Subscribe
            </ChakraRouterLink>

            <Link
              href="/#news"
              color="gray.300"
              _hover={{ textDecoration: "none", color: "#66d9ff" }}
            >
              News
            </Link>

            <Link
              href="https://open.spotify.com/artist/08J3Z1fG0FL98AkVqiRBMn"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.300"
              _hover={{ textDecoration: "none", color: "#66d9ff" }}
            >
              Spotify
            </Link>

            <Link
              href="https://youtube.com/c/ivanroblesmusic"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.300"
              _hover={{ textDecoration: "none", color: "#66d9ff" }}
            >
              YouTube
            </Link>
          </Stack>

          <Stack
            gap={5}
            align={{ base: "center", xl: "flex-start" }}
            textAlign={{ base: "center", xl: "left" }}
          >
            <Box>
              <Text color="white" fontWeight="bold" fontSize="lg" mb={2}>
                Connect
              </Text>
              <Text color="gray.400" maxW="340px" lineHeight="1.8">
                Follow Ivan Robles across all platforms for new releases,
                upcoming events, live sets, and exclusive content.
              </Text>
            </Box>

            <HStack
              gap={3}
              flexWrap="wrap"
              justify={{ base: "center", xl: "flex-start" }}
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="46px"
                  h="46px"
                  borderRadius="full"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.08)"
                  color="white"
                  _hover={{
                    textDecoration: "none",
                    bg: "rgba(0,170,255,0.16)",
                    color: "#66d9ff",
                    borderColor: "rgba(102,217,255,0.24)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 24px rgba(0, 170, 255, 0.18)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={social.icon} boxSize={4} />
                </Link>
              ))}
            </HStack>
          </Stack>
        </SimpleGrid>

        <Box
          as="hr"
          my={{ base: 8, md: 10 }}
          border="0"
          borderTop="1px solid rgba(255,255,255,0.08)"
        />

        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={3}
          textAlign="center"
        >
          <Text color="gray.400" fontSize="sm">
            © {year} DJ Ivan Robles. All rights reserved.
          </Text>

          <Text color="gray.500" fontSize="sm">
            Built for unforgettable nights, music, and live experiences.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
