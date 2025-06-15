import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";

import YouTubeVideo from "../YouTubeVideo"; // Updated YouTubeVideo component
import { useState } from "react";

const FeaturedMusic = () => {
  // List of YouTube video IDs
  const videos = [
    "VD1bnxRvLjM",
    "Ey59V0IVNfg",
    "Xx2RksffUtg",
    "PWzr9guQQuQ",
    "SFFXDiZWbJ0",
    "bX023by-zig",
    "zL6weacPPJU",
    "GckhNkkz9ik",
  ];

  // State to manage how many videos to show
  const [visibleVideos, setVisibleVideos] = useState(4);

  // Function to show more videos
  const showMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + 4, videos.length)); // Show 4 more videos each time
  };

  return (
    <Box bg="#1a1a1a" py={20} px={6}>
      <Box mb={8} textAlign="center">
        <Heading
          as="h2"
          size="4xl" // Same size as main title
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          data-aos="fade-up" // AOS animation for fade-up effect
          data-aos-duration="500" // Duration of the animation
        >
          Featured Music
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

      {/* Grid Layout for Videos */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        {videos.slice(0, visibleVideos).map((videoId, index) => (
          <Box
            key={videoId}
            data-aos="fade-up" // AOS animation for fade-up effect
            data-aos-delay={`${index * 100}`} // Delay based on index
            data-aos-duration="500" // Duration of the animation
          >
            <YouTubeVideo videoId={videoId} />
          </Box>
        ))}
      </SimpleGrid>

      {/* Show More Button */}
      {visibleVideos < videos.length && (
        <Box textAlign="center" mt={8}>
          <Button
            onClick={showMoreVideos}
            bg="#00aaff"
            color="white"
            size="lg"
            _hover={{ bg: "#0077cc" }}
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FeaturedMusic;
