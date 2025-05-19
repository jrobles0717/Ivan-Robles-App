import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"; // Import necessary components
import { useEffect, useRef } from "react";

import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      }
    };

    playAudio();
  }, []); // Empty dependency array to run once on mount

  return (
    <Box
      position="relative"
      height="100vh"
      backgroundImage="url('src/assets/hero-background.jpg')" // Use the image from the assets folder
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat" // Ensure the background does not repeat
      color="white"
    >
      <audio ref={audioRef} loop>
        <source src="src/assets/background-song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100%"
        textAlign="center"
        px={4}
      >
        <Heading as="h1" size="3xl" mb={4}>
          Welcome to Ivan Robles' Official Page
        </Heading>
        <Text fontSize="xl" mb={6}>
          Discover my work, projects, and passions.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          mb={6}
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.play().catch((error) => {
                console.error("Error playing audio:", error);
              });
            }
          }} // Optional: Play audio on button click as a fallback
        >
          Play Music
        </Button>
        <SocialLinks />
      </Flex>
    </Box>
  );
};

export default Home;
