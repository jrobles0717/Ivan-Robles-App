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
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Import social media icons
import { FaMixcloud, FaTwitch } from "react-icons/fa"; // Import Twitch and Mixcloud icons

const Home = () => {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Box
        position="relative"
        minHeight="100vh" // Use min-height to allow growth
        backgroundImage="url('src/assets/hero-background.jpg')" // Use the image from the assets folder
        backgroundSize="cover" // Ensure the background covers the entire area
        backgroundPosition="center" // Center the background image
        backgroundRepeat="no-repeat" // Ensure the background does not repeat
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
            src="/src/assets/ivan-robles-hero-pic.jpg" // Replace with your DJ's logo
            alt="DJ Logo"
            boxSize="150px"
            mb={6}
            borderRadius="full"
            border="2px solid white"
          />

          {/* Main Heading */}
          <Heading
            as="h1"
            size="4xl"
            mb={4}
            fontWeight="bold"
            textTransform="uppercase"
            color="#d64a9b" // Brand color for the heading
          >
            DJ Ivan Robles
          </Heading>

          {/* Subheading */}
          <Text fontSize="xl" mb={6} maxW="600px" color="#ffffff">
            Bringing the beats to Puerto Rico and beyond. Experience the
            ultimate sound and energy at every event.
          </Text>

          {/* Call-to-Action Button */}
          <Button
            colorScheme="teal"
            size="lg"
            px={8}
            _hover={{ bg: "#ff5e9c" }} // Lighter shade for hover effect
            onClick={() => {
              window.open(
                "https://www.youtube.com/@IvanRoblesmusic/videos",
                "_blank"
              ); // Open in a new tab
            }}
          >
            Check Out Remixes
          </Button>

          {/* Social Links */}
          <HStack gap={6} mt={8}>
            <SocialLink
              icon={FaFacebook}
              href="https://www.facebook.com/DJIvanRobles"
              label="Facebook"
            />
            <SocialLink
              icon={FaInstagram}
              href="https://instagram.com/djivanrobles"
              label="Instagram"
            />
            <SocialLink
              icon={FaEnvelope} // Updated email icon
              href="mailto:Ivanroblesmusic@gmail.com" // Use mailto for email links
              label="Email"
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
          </HStack>
        </Flex>
      </Box>

      {/* Featured Music Section */}
      <Box bg="#1a1a1a" py={20} px={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={8} color="#ff5e9c">
          Featured Music
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {/* YouTube Video Embeds */}
          <YouTubeVideo videoId="Xx2RksffUtg" />
          <YouTubeVideo videoId="PWzr9guQQuQ" />
          <YouTubeVideo videoId="SFFXDiZWbJ0" />
          <YouTubeVideo videoId="bX023by-zig" />
          <YouTubeVideo videoId="zL6weacPPJU" />
          <YouTubeVideo videoId="E6rjYzunZII" />
        </SimpleGrid>
      </Box>

      {/* Upcoming Events Section */}
      <Box bg="#2f2626" py={20} px={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={8} color="#ff5e9c">
          Upcoming Events
        </Heading>
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
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      fontSize="2xl"
      color="white"
      _hover={{
        color: "#ff5e9c", // Lighter shade for hover effect
        transform: "scale(1.2)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Icon as={icon} />
    </Box>
  );
};

// YouTube Video Component
const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <Box textAlign="center">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`} // Embed YouTube video
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
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
      <Heading as="h3" size="md" mb={2} color="#ff5e9c">
        {date}
      </Heading>
      <Text fontWeight="bold" mb={2} color="white">
        {" "}
        {/* Set color to white */}
        {location}
      </Text>
      <Text color="white">
        {" "}
        {/* Set color to white */}
        {description}
      </Text>
    </Box>
  );
};

export default Home;
