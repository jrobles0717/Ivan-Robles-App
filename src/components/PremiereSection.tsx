import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

import React from "react";
import YouTubePlayer from "./YouTubePlayer";

const PremiereSection: React.FC = () => {
  const premiereVideoId = import.meta.env.VITE_PREMIERE_VIDEO_ID || "";

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
        <Box>
          <Heading
            as="h2"
            size="3xl"
            fontWeight="bold"
            textTransform="uppercase"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            Watch the Premiere
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
        <Text fontSize="lg" color="gray.300" maxW="600px">
          Join us for the exclusive premiere of DJ Ivan Robles' latest music
          video. Experience the electrifying beats and visuals live!
        </Text>

        {/* YouTube Player */}
        <YouTubePlayer videoId={premiereVideoId} />

        {/* Call-to-Action */}
        <Button
          rel="noopener noreferrer"
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
        >
          Subscribe on YouTube
        </Button>
      </VStack>
    </Box>
  );
};

export default PremiereSection;
