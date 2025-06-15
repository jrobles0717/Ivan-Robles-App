import { Box, Spinner } from "@chakra-ui/react";

import React from "react";
import { useInView } from "react-intersection-observer";

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the iframe comes into view
    threshold: 0.1, // Trigger when 10% of the iframe is visible
  });

  return (
    <Box
      ref={ref} // Attach the Intersection Observer to this Box
      position="relative"
      width="100%"
      maxWidth="800px" // Increased max width for a larger video
      height="450px" // Increased height for a larger video
      mx="auto"
      textAlign="center"
      bg="black" // Background color to prevent layout shifts
    >
      {inView ? (
        <iframe
          width="100%" // Full width of the container
          height="100%" // Full height of the container
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            border: 0,
          }}
        />
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          bg="black"
        >
          <Spinner color="white" size="lg" />{" "}
          {/* Show a spinner while loading */}
        </Box>
      )}
    </Box>
  );
};

export default YouTubePlayer;
