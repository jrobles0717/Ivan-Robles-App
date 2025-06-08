import React from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import YouTube, { type YouTubeProps } from "react-youtube";

const YouTubePlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
  const onPlayerReady: NonNullable<YouTubeProps["onReady"]> = ({ target }) => {
    console.log("YouTube Player is ready!", target);
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0, // Disable autoplay for better user experience
      controls: 1, // Show player controls
      rel: 0, // Disable related videos at the end
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
};

const PremiereSection: React.FC = () => {
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
        <Heading
          as="h2"
          size="2xl"
          fontWeight="bold"
          textTransform="uppercase"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
        >
          Watch the Premiere
        </Heading>

        {/* Subtitle */}
        <Text fontSize="lg" color="gray.300" maxW="600px">
          Join us for the exclusive premiere of DJ Ivan Robles' latest music
          video. Experience the electrifying beats and visuals live!
        </Text>

        {/* YouTube Player */}
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.5)"
          maxW="100%"
        >
          <YouTubePlayer videoId="ytxKtmE-pqc" />
        </Box>

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
