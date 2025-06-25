import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";

import { useState } from "react";

const PartyHighlights = () => {
  // List of local video files
  const videos = [
    { src: "/assets/irob-playa-video.mp4", title: "Fiesta En La Playa II" },
    {
      title: "Fiesta En La Playa I",
      src: "/assets/irob-caribe-hilton-video.mp4",
    },
    { src: "/assets/irob-home-video.mp4", title: "La Vida Es Bonita" },
    { src: "/assets/irob-moonlight-video.mp4", title: "Moonlight Mirage" },
  ];

  // State to manage how many videos to show
  const [visibleVideos, setVisibleVideos] = useState(4);

  // Function to show more videos
  const showMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + 4, videos.length)); // Show 4 more videos each time
  };

  return (
    <Box bg="#1a1a1a" py={20} px={6}>
      {/* Section Title */}
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
          Party Highlights
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
        {videos.slice(0, visibleVideos).map((video, index) => (
          <Box
            key={index}
            data-aos="fade-up" // AOS animation for fade-up effect
            data-aos-delay={`${index * 100}`} // Delay based on index
            data-aos-duration="500" // Duration of the animation
          >
            {/* Video Wrapper for Consistent Aspect Ratio */}
            <Box
              className="video-wrapper"
              style={{
                position: "relative",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                height: 0,
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <video
                controls
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  // objectFit: "cover", // Ensures the video fills the container
                }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
            <Box mt={2} textAlign="center">
              <Heading as="h3" size="md" color="white">
                {video.title}
              </Heading>
            </Box>
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

export default PartyHighlights;
