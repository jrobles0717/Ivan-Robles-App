import { Box, Button, Flex, Icon, Link, Text } from "@chakra-ui/react";

import { FaMusic } from "react-icons/fa"; // Import a simple icon (you can change this later)
import Hamburger from "hamburger-react"; // Import the Hamburger component
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false); // State to manage the hamburger menu
  const location = useLocation(); // Get the current location from React Router
  const activeLink = location.pathname; // Set active link based on current path

  return (
    <Box
      bg="#000000" // Black background color
      color="#ffffff" // White text color
      px={10} // Added padding on the left and right
      py={4}
      shadow="lg"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        {/* Icon wrapped in a Link to redirect to home */}
        <Link
          href="/"
          display="flex"
          alignItems="center"
          _hover={{ cursor: "pointer" }}
        >
          <Icon as={FaMusic} boxSize={8} color="#d64a9b" /> {/* Simple icon */}
        </Link>

        {/* Hamburger Menu for Mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Box>

        {/* Desktop Navigation Links */}
        <Flex gap={8} display={{ base: "none", md: "flex" }}>
          <Link
            href="/"
            color="#ffffff" // White text color for the link
            display="flex"
            alignItems="center"
            position="relative" // For the active link indicator
            onClick={() => setOpen(false)} // Close the menu on link click
          >
            Home
            {activeLink === "/" && (
              <Box
                position="absolute"
                bottom="-2px"
                left="0"
                right="0"
                height="2px"
                bg="#ff5e9c" // Active link color
              />
            )}
          </Link>
          <Link
            href="/about"
            color="#ffffff" // White text color for the link
            display="flex"
            alignItems="center"
            position="relative" // For the active link indicator
            onClick={() => setOpen(false)} // Close the menu on link click
          >
            About Me
            {activeLink === "/about" && (
              <Box
                position="absolute"
                bottom="-2px"
                left="0"
                right="0"
                height="2px"
                bg="#ff5e9c" // Active link color
              />
            )}
          </Link>
          {/* Subscribe Button as CTA */}
          <Button
            as={Link}
            href="/subscribe" // Link to the subscribe page
            color="#ffffff" // White text color
            bg="#d64a9b" // Brand color for the button
            _hover={{ bg: "#ff5e9c" }} // Lighter shade for hover effect
            onClick={() => setOpen(false)} // Close the menu on click
          >
            Subscribe
          </Button>
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
          bg="#000000" // Black background for mobile
          color="#ffffff" // White text color
          p={4}
          shadow="md"
        >
          <Flex direction="column" gap={4}>
            <Link
              href="/"
              color="#ffffff" // White text color for the link
              display="flex"
              alignItems="center"
              onClick={() => {
                setOpen(false); // Close the menu on link click
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              color="#ffffff" // White text color for the link
              display="flex"
              alignItems="center"
              onClick={() => {
                setOpen(false); // Close the menu on link click
              }}
            >
              About Me
            </Link>
            <Button
              as={Link}
              href="/subscribe" // Link to the subscribe page
              color="#ffffff" // White text color
              bg="#d64a9b" // Brand color for the button
              _hover={{ bg: "#ff5e9c" }} // Lighter shade for hover effect
              onClick={() => {
                setOpen(false); // Close the menu on click
              }}
            >
              Subscribe
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
