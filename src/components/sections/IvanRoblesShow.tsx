import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const IvanRoblesShow = () => {
  return (
    <Box bg="#f5f5f5" py={20} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={8}
        maxW="1200px"
        mx="auto"
      >
        {/* Left Side: Image */}
        <Box flex="1" textAlign="center">
          <Image
            src="/assets/house-boutique-logo-1.jpeg"
            alt="House Boutique Logo"
            objectFit="contain"
            mx="auto"
            maxW={{ base: "90%", sm: "80%", md: "400px" }} // Responsive max width
            borderRadius="md"
            shadow="lg"
            _hover={{
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            }}
            data-aos="fade-up" // AOS animation for the image
          />
        </Box>

        {/* Right Side: Text and CTA */}
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h2"
            size="3xl"
            fontWeight="bold"
            color="#333"
            mb={4}
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
            data-aos="fade-up" // AOS animation for the heading
          >
            The Ivan Robles Show
          </Heading>
          <Text
            fontSize="lg"
            color="#555"
            mb={6}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experience the electrifying beats of Ivan Robles at{" "}
            <strong>House Boutique</strong>. Tune in to the ultimate mix show
            featuring the best of house music, live from San Juan, Puerto Rico.
            Don’t miss the energy and rhythm that will keep you moving!
          </Text>
          <Button
            bg="#0026b9"
            color="white"
            size="lg"
            px={8}
            _hover={{
              bg: "#00aaff",
              color: "#000000",
            }}
            transition="background-color 0.3s, color 0.3s"
            onClick={() => {
              window.open(
                "https://www.youtube.com/@IvanRoblesmusic", // Replace with the actual link
                "_blank"
              );
            }}
            data-aos="fade-up" // AOS animation for the button
            data-aos-delay="400" // Delay for the button animation
            data-aos-offset="50" // Trigger animation sooner
          >
            Watch Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default IvanRoblesShow;
