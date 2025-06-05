import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";

import Hamburger from "hamburger-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <Box
      bg="#000000"
      color="white"
      px={10}
      py={4}
      shadow="lg"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Link
          href="/"
          display="flex"
          alignItems="center"
          _hover={{ cursor: "pointer" }}
        >
          <Image
            src="/src/assets/irob-logo.jpeg"
            alt="DJ Ivan Robles Logo"
            boxSize="50px"
            objectFit="contain"
          />
        </Link>

        {/* Mobile Hamburger */}
        <Box display={{ base: "block", md: "none" }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </Box>

        {/* Desktop Links */}
        <Flex gap={8} display={{ base: "none", md: "flex" }}>
          <Link
            href="/"
            color="white"
            position="relative"
            onClick={() => setOpen(false)}
          >
            Home
            {activeLink === "/" && (
              <Box
                position="absolute"
                bottom="-2px"
                left="0"
                right="0"
                height="2px"
                bg="#00aaff"
              />
            )}
          </Link>
          <Link
            href="/about"
            color="white"
            position="relative"
            onClick={() => setOpen(false)}
          >
            About Me
            {activeLink === "/about" && (
              <Box
                position="absolute"
                bottom="-2px"
                left="0"
                right="0"
                height="2px"
                bg="#00aaff"
              />
            )}
          </Link>
          <Button
            as={Link}
            href="/subscribe"
            bg="#0026b9"
            color="white"
            transition="background-color 0.3s, color 0.3s"
            _hover={{
              bg: "#00aaff", // light blue
              color: "#000", // pure black text for max contrast
            }}
            onClick={() => setOpen(false)}
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          position="absolute"
          top="60px"
          left="0"
          right="0"
          bg="#000000"
          color="white"
          p={4}
          shadow="md"
        >
          <Flex direction="column" gap={4}>
            <Link href="/" color="white" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" color="white" onClick={() => setOpen(false)}>
              About Me
            </Link>
            <Button
              as={Link}
              href="/subscribe"
              bg="#0026b9"
              color="white"
              transition="background-color 0.3s, color 0.3s"
              _hover={{
                bg: "#00aaff",
                color: "#000",
              }}
              onClick={() => setOpen(false)}
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
