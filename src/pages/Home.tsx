import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Import social media icons

const Home = () => {
  return (
    <Box
      position="relative"
      flex="1" // Allow this Box to grow and fill available space
      backgroundImage="url('src/assets/hero-background.jpg')" // Use the image from the assets folder
      backgroundSize="cover"
      backgroundPosition="center"
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

      {/* Main Content */}
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
          Bringing the beats to Puerto Rico and beyond. Experience the ultimate
          sound and energy at every event.
        </Text>

        {/* Call-to-Action Button */}
        <Button
          colorScheme="teal"
          size="lg"
          px={8}
          _hover={{ bg: "#ff5e9c" }} // Lighter shade for hover effect
          onClick={() => console.log("Book Now clicked")}
        >
          Book Now
        </Button>

        {/* Social Links */}
        <HStack gap={6} mt={8}>
          <SocialLink
            icon={FaFacebook}
            href="https://facebook.com"
            label="Facebook"
          />
          <SocialLink
            icon={FaInstagram}
            href="https://instagram.com"
            label="Instagram"
          />
          <SocialLink
            icon={FaTwitter}
            href="https://twitter.com"
            label="Twitter"
          />
          <SocialLink
            icon={FaYoutube}
            href="https://youtube.com"
            label="YouTube"
          />
        </HStack>
      </Flex>
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

export default Home;
