import { Box, Image, Text } from "@chakra-ui/react";

const Sponsor = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #1a1a1a, #333333)" // Dark gradient background
      py={16}
      px={6}
      textAlign="center"
    >
      {/* Title */}
      <Box
        mb={6}
        data-aos="fade-up" // AOS animation for fade-up effect
        data-aos-duration="1000" // Duration of the animation
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="#ffffff" // White text for contrast
          textTransform="uppercase"
          letterSpacing="wide"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)" // Subtle shadow for depth
        >
          Sponsored By
        </Text>
        <Box
          height="4px"
          width="80%"
          bg="#00aaff" // Branding light blue
          display="inline-block"
          mt={2}
          borderRadius="md"
        />
      </Box>

      {/* Sponsor Logo */}
      <Box
        bg="white"
        display="inline-block"
        p={6}
        borderRadius="lg"
        shadow="2xl"
        transition="transform 0.3s ease-in-out" // Smooth transition for hover effect
        _hover={{
          transform: "scale(1.1)", // Scale up on hover
        }}
        data-aos="fade-up" // AOS animation for fade-up effect
        data-aos-duration="1000" // Duration of the animation
        data-aos-delay="200" // Delay for the animation
      >
        <Image
          src="/assets/PioneerDJ.jpeg" // Example sponsor logo
          alt="Pioneer DJ"
          objectFit="contain"
          height="100px"
        />
      </Box>
    </Box>
  );
};

export default Sponsor;
