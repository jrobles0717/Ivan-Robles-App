import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaMixcloud, FaTwitch } from "react-icons/fa"; // Import Twitch and Mixcloud icons

import ChakraAnchor from "../components/common/ChakraAnchor"; // Import the ChakraAnchor component
import PremiereSection from "../components/PremiereSection";

const Home = () => {
  return (
    <Box>
      {/* Hero Section with Background Image */}
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
          />

          {/* Main Heading with Underline */}
          <Box mb={4}>
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
            />
          </Box>

          {/* Subheading */}
          <Text fontSize="xl" mb={6} maxW="600px" color="white">
            Bringing the beats to Puerto Rico and beyond. Experience the
            ultimate sound and energy at every event.
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
          >
            Check Out Remixes
          </Button>

          {/* Social Links */}
          <HStack gap={6} mt={8}>
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
              href="mailto:Ivanroblesmusic@gmail.com"
              label="Email"
            />
          </HStack>
        </Flex>

        {/* Sponsor Section */}
        <Box
          bg="linear-gradient(135deg, #1a1a1a, #333333)" // Dark gradient background
          py={16}
          px={6}
          textAlign="center"
        >
          {/* Title */}
          <Box mb={6}>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="#ffffff" // White text for contrast
              textTransform="uppercase"
              letterSpacing="wide"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)" // Subtle shadow for depth
            >
              Sponsored By
            </Text>
            <Box
              height="4px"
              width="80px"
              bg="#00aaff" // Branding light blue
              mx="auto"
              mt={2}
              borderRadius="md"
            />
          </Box>

          {/* Sponsor Logo */}
          <Box
            bg="white"
            display="inline-block"
            p={6}
            borderRadius="lg"
            shadow="2xl"
            _hover={{
              transform: "scale(1.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Image
              src="/assets/PioneerDJ.jpeg"
              alt="Pioneer DJ"
              objectFit="contain"
              height="100px"
            />
          </Box>
        </Box>
      </Box>

      {/* The Ivan Robles Show Section */}
      <Box bg="#f5f5f5" py={20} px={6}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={8}
          maxW="1200px"
          mx="auto"
        >
          {/* Left Side: Image */}
          <Box flex="1" textAlign="center">
            <Image
              src="/assets/house-boutique-logo-1.jpeg"
              alt="House Boutique Logo"
              objectFit="contain"
              mx="auto"
              maxW={{ base: "90%", sm: "80%", md: "400px" }} // Responsive max width
              borderRadius="md"
              shadow="lg"
              _hover={{
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Box>

          {/* Right Side: Text and CTA */}
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Heading
              as="h2"
              size="3xl"
              fontWeight="bold"
              color="#333"
              mb={4}
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
            >
              The Ivan Robles Show
            </Heading>
            <Text fontSize="lg" color="#555" mb={6}>
              Experience the electrifying beats of Ivan Robles at{" "}
              <strong>House Boutique</strong>. Tune in to the ultimate mix show
              featuring the best of house music, live from San Juan, Puerto
              Rico. Don’t miss the energy and rhythm that will keep you moving!
            </Text>
            <Button
              bg="#0026b9"
              color="white"
              size="lg"
              px={8}
              _hover={{
                bg: "#00aaff",
                color: "#000000",
              }}
              transition="background-color 0.3s, color 0.3s"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/@IvanRoblesmusic", // Replace with the actual link
                  "_blank"
                );
              }}
            >
              Watch Now
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Premiere Video Section */}
      <PremiereSection />

      {/* Featured Music Section */}
      <Box bg="#1a1a1a" py={20} px={6}>
        <Box mb={8} textAlign="center">
          <Heading
            as="h2"
            size="4xl" // Same size as main title
            fontWeight="bold"
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            Featured Music
          </Heading>
          <Box
            height="4px"
            width="80%"
            bg="#00aaff" // Branding light blue
            display="inline-block"
            mt={2}
            borderRadius="md"
          />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {/* YouTube Video Embeds */}
          <YouTubeVideo videoId="VD1bnxRvLjM" />
          <YouTubeVideo videoId="Ey59V0IVNfg" />
          <YouTubeVideo videoId="Xx2RksffUtg" />
          <YouTubeVideo videoId="PWzr9guQQuQ" />
          <YouTubeVideo videoId="SFFXDiZWbJ0" />
          <YouTubeVideo videoId="bX023by-zig" />
          <YouTubeVideo videoId="zL6weacPPJU" />
          <YouTubeVideo videoId="E6rjYzunZII" />
          <YouTubeVideo videoId="GckhNkkz9ik" />
        </SimpleGrid>
      </Box>

      {/* Upcoming Events Section */}
      <Box bg="#2f2626" py={20} px={6}>
        <Box mb={8} textAlign="center">
          <Heading
            as="h2"
            size="4xl"
            fontWeight="bold"
            color="white"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            Upcoming Events
          </Heading>
          <Box
            height="4px"
            width="80%"
            bg="#00aaff" // Branding light blue
            display="inline-block"
            mt={2}
            borderRadius="md"
          />
        </Box>
        <VStack gap={6}>
          <EventCard
            date="June 15, 2025"
            location="San Juan, Puerto Rico"
            description="Join DJ Ivan Robles for an unforgettable night of music and energy."
          />
          <EventCard
            date="July 20, 2025"
            location="Miami, Florida"
            description="Experience the beats live at the Miami Summer Festival."
          />
          <EventCard
            date="August 5, 2025"
            location="New York City, New York"
            description="Catch DJ Ivan Robles at the NYC Music Fest."
          />
        </VStack>
      </Box>
    </Box>
  );
};

// Social Link Component with hover animation
const SocialLink = ({
  icon,
  href,
  label,
}: {
  icon: any;
  href: string;
  label: string;
}) => {
  return (
    <ChakraAnchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      fontSize="2xl"
      color="white"
      _hover={{
        color: "#00aaff", // Branding light blue
        transform: "scale(1.2)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Icon as={icon} />
    </ChakraAnchor>
  );
};

// YouTube Video Component
const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <Box textAlign="center">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
};

// Event Card Component
const EventCard = ({
  date,
  location,
  description,
}: {
  date: string;
  location: string;
  description: string;
}) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)"
      borderRadius="md"
      p={6}
      shadow="md"
      width="100%"
    >
      <Heading as="h3" size="md" mb={2} color="#00aaff">
        {date}
      </Heading>
      <Text fontWeight="bold" mb={2} color="white">
        {location}
      </Text>
      <Text color="white">{description}</Text>
    </Box>
  );
};

export default Home;
