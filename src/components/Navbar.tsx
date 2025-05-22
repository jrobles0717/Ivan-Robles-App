import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaEnvelope, FaHome, FaUser } from "react-icons/fa"; // Import icons for navigation

import Hamburger from "hamburger-react"; // Import the Hamburger component
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false); // State to manage the hamburger menu

  return (
    <Box
      bg="#2f2626" // Dark background color
      color="#ffffff" // White text color
      px={6}
      py={4}
      shadow="lg"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="wide"
          color="#d64a9b"
        >
          Ivan Robles
        </Text>

        {/* Hamburger Menu for Mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Box>

        {/* Desktop Navigation Links */}
        <Flex gap={8} display={{ base: "none", md: "flex" }}>
          <Link
            href="/"
            color="#d64a9b" // Brand color for the link
            display="flex"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              color: "#ff5e9c", // Lighter shade for hover effect
              transform: "scale(1.1)",
              transition: "0.3s",
            }}
          >
            <Icon as={FaHome} mr={2} /> Home
          </Link>
          <Link
            href="/about"
            color="#d64a9b" // Brand color for the link
            display="flex"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              color: "#ff5e9c", // Lighter shade for hover effect
              transform: "scale(1.1)",
              transition: "0.3s",
            }}
          >
            <Icon as={FaUser} mr={2} /> About Me
          </Link>
          <Link
            href="/contact"
            color="#d64a9b" // Brand color for the link
            display="flex"
            alignItems="center"
            _hover={{
              textDecoration: "none",
              color: "#ff5e9c", // Lighter shade for hover effect
              transform: "scale(1.1)",
              transition: "0.3s",
            }}
          >
            <Icon as={FaEnvelope} mr={2} /> Contact
          </Link>
        </Flex>
      </Flex>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          position="absolute"
          top="60px" // Adjust based on your navbar height
          left="0"
          right="0"
          bg="#4c3c3c" // Slightly lighter background for mobile
          color="#ffffff" // White text color
          p={4}
          shadow="md"
        >
          <Flex direction="column" gap={4}>
            <Link
              href="/"
              color="#d64a9b" // Brand color for the link
              display="flex"
              alignItems="center"
              _hover={{ color: "#ff5e9c" }} // Lighter shade for hover effect
            >
              <Icon as={FaHome} mr={2} /> Home
            </Link>
            <Link
              href="/about"
              color="#d64a9b" // Brand color for the link
              display="flex"
              alignItems="center"
              _hover={{ color: "#ff5e9c" }} // Lighter shade for hover effect
            >
              <Icon as={FaUser} mr={2} /> About Me
            </Link>
            <Link
              href="/contact"
              color="#d64a9b" // Brand color for the link
              display="flex"
              alignItems="center"
              _hover={{ color: "#ff5e9c" }} // Lighter shade for hover effect
            >
              <Icon as={FaEnvelope} mr={2} /> Contact
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
