import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={3}>
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Ivan Robles
        </Text>
        <Flex gap={4}>
          <Link
            href="/"
            color="white"
            _hover={{ textDecoration: "none", color: "teal.300" }}
          >
            Home
          </Link>
          <Link
            href="/about"
            color="white" // Set default link color to white
            _hover={{ textDecoration: "none", color: "teal.300" }}
          >
            About Me
          </Link>
          <Link
            href="/contact"
            color="white" // Set default link color to white
            _hover={{ textDecoration: "none", color: "teal.300" }}
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
