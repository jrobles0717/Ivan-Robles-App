import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control"; // Import from the new package

const Contact = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <VStack maxW="md" mx="auto" gap={4}>
        {" "}
        {/* Use gap instead of spacing */}
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
        <Button colorScheme="teal" size="lg">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;
