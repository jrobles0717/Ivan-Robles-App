import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMixcloud,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";

import SocialLink from "../SocialLink";

const Hero = () => {
  return (
    <Box
      position="relative"
      minHeight="100vh" // Full viewport height
      backgroundImage="url('/assets/hero-background.jpg')" // Background image
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      color="white"
    >
      {/* Overlay for a darkened effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)" // Semi-transparent overlay
        zIndex="1"
      />

      {/* Main Content Wrapper */}
      <Flex
        direction="column"
        justify="center" // Center content vertically
        align="center" // Center content horizontally
        height="100vh" // Full height of the viewport
        textAlign="center"
        px={4}
        zIndex="2" // Ensure content is above the overlay
        position="relative"
      >
        {/* DJ Logo or Image */}
        <Image
          src="/assets/ivan-robles-hero-pic.jpg" // DJ's logo
          alt="DJ Logo"
          boxSize="150px"
          mb={6}
          borderRadius="full"
          border="2px solid white"
          data-aos="zoom-in" // Zoom-in animation for the logo
        />

        {/* Main Heading with Underline */}
        <Box mb={4} data-aos="fade-down" data-aos-delay="200">
          <Heading
            as="h1"
            size="4xl"
            fontWeight="bold"
            textTransform="uppercase"
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            DJ Ivan Robles
          </Heading>
          <Box
            height="4px"
            width="80%"
            bg="#00aaff"
            mx="auto"
            mt={2}
            borderRadius="md"
          />
          {/* Logo Below Heading */}
          <Image
            src="/assets/irob-logo.png"
            alt="Ivan Robles Logo"
            width="150px"
            height="80px"
            objectFit="contain"
            mt={4}
            mx="auto"
            data-aos="fade-up" // Fade-up animation for secondary logo
            data-aos-delay="400"
          />
        </Box>

        {/* Subheading */}
        <Text
          fontSize="xl"
          mb={6}
          maxW="600px"
          color="white"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Bringing the beats to Puerto Rico and beyond. Experience the ultimate
          sound and energy at every event.
        </Text>

        {/* Call-to-Action Button */}
        <Button
          bg="#0026b9" // Branding dark blue
          color="white"
          size="lg"
          px={8}
          _hover={{
            bg: "#00aaff", // Light blue bg on hover
            color: "#000000", // Pure black text for max contrast
          }}
          transition="background-color 0.3s, color 0.3s"
          onClick={() => {
            window.open(
              "https://www.youtube.com/@IvanRoblesmusic/videos",
              "_blank"
            );
          }}
          data-aos="zoom-in"
          data-aos-delay="800" // Delayed zoom-in animation for the button
        >
          Check Out Remixes
        </Button>

        {/* Social Links */}
        <HStack
          gap={6}
          mt={8}
          data-aos="fade-up" // Fade-up animation for social links
          data-aos-delay="1000" // Delayed animation for smooth appearance
          data-aos-offset="0" // Trigger animation immediately
        >
          <SocialLink
            icon={FaFacebook}
            href="https://www.facebook.com/IROBMUSIC"
            label="Facebook"
          />
          <SocialLink
            icon={FaInstagram}
            href="https://instagram.com/djivanrobles"
            label="Instagram"
          />
          <SocialLink
            icon={FaTiktok}
            href="https://www.tiktok.com/@ivanroblesmusic"
            label="TikTok"
          />
          <SocialLink
            icon={FaYoutube}
            href="https://youtube.com/c/ivanroblesmusic"
            label="YouTube"
          />
          <SocialLink
            icon={FaTwitch}
            href="https://www.twitch.com/djivanrobles"
            label="Twitch"
          />
          <SocialLink
            icon={FaMixcloud}
            href="https://www.mixcloud.com/ivanrobles"
            label="Mixcloud"
          />
          <SocialLink
            icon={FaEnvelope}
            href="mailto:ivan@ivanroblesmusic.com"
            label="Email"
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Hero;
