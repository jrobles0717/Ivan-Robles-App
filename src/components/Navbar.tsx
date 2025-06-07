import { Box, Flex, Image } from "@chakra-ui/react";
// src/components/Navbar/Navbar.tsx
import React, { useEffect, useState } from "react";

import { ChakraRouterLink } from "../components/common/ChakraRouterLink"; // Import the Chakra-wrapped RouterLink
import Hamburger from "hamburger-react";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Underline for active link
  const ActiveBar = (
    <Box
      position="absolute"
      bottom="-2px"
      left={0}
      right={0}
      height="2px"
      bg="#00aaff"
    />
  );

  return (
    <Box
      as="nav"
      bg="#000"
      color="white"
      px={6}
      py={4}
      shadow="lg"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex align="center" justify="space-between">
        {/* Logo */}
        <ChakraRouterLink
          to="/"
          display="flex"
          alignItems="center"
          _hover={{ opacity: 0.8, textDecoration: "none" }}
          _focus={{ outline: "none" }}
        >
          <Image
            src="/assets/irob-logo.jpeg"
            alt="Ivan Robles Logo"
            boxSize="50px"
            objectFit="contain"
          />
        </ChakraRouterLink>

        {/* Hamburger (mobile only) */}
        <Box display={{ base: "block", md: "none" }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Box>

        {/* Desktop Links */}
        <Flex display={{ base: "none", md: "flex" }} gap={8} align="center">
          <ChakraRouterLink
            to="/"
            position="relative"
            px={2}
            py={1}
            _hover={{ color: "#00aaff", textDecoration: "none" }}
            _focus={{ outline: "none" }}
          >
            Home
            {pathname === "/" && ActiveBar}
          </ChakraRouterLink>

          <ChakraRouterLink
            to="/about"
            position="relative"
            px={2}
            py={1}
            _hover={{ color: "#00aaff", textDecoration: "none" }}
            _focus={{ outline: "none" }}
          >
            About Me
            {pathname === "/about" && ActiveBar}
          </ChakraRouterLink>

          <ChakraRouterLink
            to="/subscribe"
            px={4}
            py={2}
            bg="#0026b9"
            color="white"
            borderRadius="5px"
            textAlign="center"
            _hover={{ bg: "#00aaff", color: "#000" }}
            _focus={{ outline: "none" }}
            transition="background-color 0.3s, color 0.3s"
          >
            Subscribe
          </ChakraRouterLink>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          mt={4}
          bg="#000"
          p={4}
          shadow="md"
        >
          <Flex direction="column" gap={4}>
            <ChakraRouterLink
              to="/"
              py={2}
              _hover={{ color: "#00aaff", textDecoration: "none" }}
              _focus={{ outline: "none" }}
            >
              Home
            </ChakraRouterLink>
            <ChakraRouterLink
              to="/about"
              py={2}
              _hover={{ color: "#00aaff", textDecoration: "none" }}
              _focus={{ outline: "none" }}
            >
              About Me
            </ChakraRouterLink>
            <ChakraRouterLink
              to="/subscribe"
              display="block"
              w="full"
              py={2}
              bg="#0026b9"
              color="white"
              borderRadius="5px"
              textAlign="center"
              _hover={{ bg: "#00aaff", color: "#000" }}
              _focus={{ outline: "none" }}
              transition="background-color 0.3s, color 0.3s"
            >
              Subscribe
            </ChakraRouterLink>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
