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

const Subscribe = () => {
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
        {/* Title with Underline */}
        <Box mb={8} textAlign="center">
          <Heading
            as="h2"
            size="4xl" // Same size as the main title
            fontWeight="bold"
            color="white" // Consistent white color
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)" // Subtle text shadow for depth
          >
            Get in Touch
          </Heading>
          <Box
            height="4px" // Thickness of the underline
            width="80%" // Set to 80% to match the title width
            bg="#00aaff" // Underline color changed to branding blue
            display="inline-block" // Make the underline fit the title width
            mx="auto" // Center the underline
            mt={2} // Margin top for spacing
            borderRadius="md" // Rounded edges for a modern look
          />
        </Box>

        <Text fontSize="lg" mb={6}>
          We’d love to hear from you! Please fill out the form below to reach
          out.
        </Text>

        {/* Form Fields */}
        <FormControl>
          <FormLabel mb={2}>Name</FormLabel> {/* Added margin-bottom */}
          <Input
            placeholder="Your Name"
            borderColor="gray.600"
            borderRadius="md" // Rounded corners
            _hover={{ borderColor: "#00aaff" }} // Hover effect
            _focus={{
              borderColor: "#00aaff", // Focus effect
              boxShadow: "0 0 0 1px #00aaff", // Focus shadow
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
            _hover={{ borderColor: "#00aaff" }} // Hover effect
            _focus={{
              borderColor: "#00aaff", // Focus effect
              boxShadow: "0 0 0 1px #00aaff", // Focus shadow
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
            _hover={{ borderColor: "#00aaff" }} // Hover effect
            _focus={{
              borderColor: "#00aaff", // Focus effect
              boxShadow: "0 0 0 1px #00aaff", // Focus shadow
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
          bg="#0026b9" // Button background color changed to branding blue
          _hover={{ bg: "#00aaff", color: "white" }} // Button hover effect
          transition="background-color 0.3s, color 0.3s" // Smooth transition
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};

export default Subscribe;
