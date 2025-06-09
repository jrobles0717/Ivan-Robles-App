import { AspectRatio } from "@chakra-ui/react";
import React from "react";

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  return (
    <AspectRatio ratio={16 / 9} w="100%" maxW="640px" mx="auto">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
};

export default YouTubePlayer;
