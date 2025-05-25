import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

const Contact = () => {
  return (
    <Box
      position="relative"
      height="100vh" // Set height to full viewport height
      backgroundImage="url('src/assets/dj-background-2.png')" // Set your background image here
      backgroundSize="cover" // Ensure the background covers the entire area
      backgroundPosition="center" // Center the background image
      color="white"
      overflow="hidden"
      display="flex" // Use Flexbox for centering
      alignItems="center" // Center vertically
      justifyContent="center" // Center horizontally
      textAlign="center"
    >
      {/* Overlay for better text visibility */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)" // Dark overlay
        zIndex="1"
      />

      {/* Main Content */}
      <VStack
        maxW={{ base: "90%", md: "md" }} // Responsive width
        mx="auto"
        gap={6}
        zIndex="2"
        position="relative"
        p={8} // Padding for the card effect
        borderRadius="md" // Rounded corners
        boxShadow="lg" // Shadow for depth
        bg="black" // Opaque background for the form container
      >
        <Heading as="h2" size="xl" mb={4} color="#ff5e9c">
          Get in Touch
        </Heading>
        <Text fontSize="lg" mb={6}>
          We’d love to hear from you! Please fill out the form below to reach
          out.
        </Text>

        <FormControl>
          <FormLabel mb={2}>Name</FormLabel> {/* Added margin-bottom */}
          <Input
            placeholder="Your Name"
            borderColor="gray.600"
            borderRadius="md" // Rounded corners
            _hover={{ borderColor: "#ff5e9c" }} // Hover effect
            _focus={{
              borderColor: "#ff5e9c", // Focus effect
              boxShadow: "0 0 0 1px #ff5e9c", // Focus shadow
            }}
            transition="border-color 0.3s, box-shadow 0.3s" // Smooth transition
            size="lg" // Larger input size
            mt={2} // Added margin-top
          />
        </FormControl>
        <FormControl>
          <FormLabel mb={2}>Email</FormLabel> {/* Added margin-bottom */}
          <Input
            type="email"
            placeholder="Your Email"
            borderColor="gray.600"
            borderRadius="md" // Rounded corners
            _hover={{ borderColor: "#ff5e9c" }} // Hover effect
            _focus={{
              borderColor: "#ff5e9c", // Focus effect
              boxShadow: "0 0 0 1px #ff5e9c", // Focus shadow
            }}
            transition="border-color 0.3s, box-shadow 0.3s" // Smooth transition
            size="lg" // Larger input size
            mt={2} // Added margin-top
          />
        </FormControl>
        <FormControl>
          <FormLabel mb={2}>Message</FormLabel> {/* Added margin-bottom */}
          <Textarea
            placeholder="Your Message"
            borderColor="gray.600"
            borderRadius="md" // Rounded corners
            _hover={{ borderColor: "#ff5e9c" }} // Hover effect
            _focus={{
              borderColor: "#ff5e9c", // Focus effect
              boxShadow: "0 0 0 1px #ff5e9c", // Focus shadow
            }}
            transition="border-color 0.3s, box-shadow 0.3s" // Smooth transition
            size="lg" // Larger textarea size
            mt={2} // Added margin-top
          />
        </FormControl>
        <Button
          colorScheme="teal"
          size="lg"
          width="full" // Full width
          _hover={{ bg: "#ff5e9c", color: "white" }} // Button hover effect
          transition="background-color 0.3s, color 0.3s" // Smooth transition
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;
