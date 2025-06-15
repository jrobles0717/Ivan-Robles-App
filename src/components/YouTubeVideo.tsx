import { Box, Spinner } from "@chakra-ui/react";

import React from "react";
import { useInView } from "react-intersection-observer";

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the video comes into view
    threshold: 0.1, // Trigger when 10% of the video is visible
  });

  return (
    <Box
      ref={ref} // Attach the Intersection Observer to this Box
      position="relative"
      width="100%"
      maxWidth="640px"
      mx="auto"
      textAlign="center"
    >
      {inView ? (
        <iframe
          width="100%"
          height="315"
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
          height="315px" // Maintain the original height
          bg="black"
        >
          <Spinner color="white" size="lg" />{" "}
          {/* Show a spinner while loading */}
        </Box>
      )}
    </Box>
  );
};

export default YouTubeVideo;
