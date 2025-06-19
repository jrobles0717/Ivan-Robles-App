import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const VideoSection = () => {
  return (
    <Box
      as="section"
      bg="linear-gradient(135deg, #000000, #1a1a1a)"
      color="white"
      py={16}
      px={6}
      textAlign="center"
    >
      <VStack gap={8} maxW="800px" mx="auto">
        {/* Section Heading */}
        <Box data-aos="fade-up" data-aos-duration="800" data-aos-offset="100">
          <Heading
            as="h2"
            size="3xl"
            fontWeight="bold"
            textTransform="uppercase"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            La vida es bonita
          </Heading>
          <Box
            height="4px"
            width="80%"
            bg="#00aaff" // Branding light blue
            display="inline-block"
            mt={2}
            borderRadius="md"
          />
        </Box>

        {/* Subtitle */}
        <Text
          fontSize="lg"
          color="gray.300"
          maxW="600px"
          data-aos="fade-up"
          data-aos-delay="100" // Reduced delay for faster appearance
          data-aos-duration="800"
          data-aos-offset="100"
        >
          Experience the energy and excitement of DJ Ivan Robles in action!
        </Text>

        {/* Local Video */}
        <Box
          width="100%"
          maxW="800px"
          mb={6}
          position="relative"
          zIndex="2" // Ensure video is above the overlay
          mx="auto" // Center the video
          data-aos="fade-up" // AOS animation for the video
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <video
            controls
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <source src="/assets/irob-home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </VStack>
    </Box>
  );
};

export default VideoSection;
