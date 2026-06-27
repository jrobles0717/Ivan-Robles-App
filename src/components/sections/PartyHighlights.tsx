import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { partyHighlights } from "../../data/highlights";
import { useState } from "react";

const PartyHighlights = () => {
  const videos = partyHighlights;

  const [visibleVideos, setVisibleVideos] = useState(4);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const showMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + 4, videos.length));
  };

  return (
    <Box
      bg="linear-gradient(180deg, #0b1620 0%, #0f1115 45%, #151515 100%)"
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 8 }}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative glow */}
      <Box
        position="absolute"
        top="-120px"
        left="-80px"
        width="280px"
        height="280px"
        borderRadius="full"
        bg="rgba(0, 170, 255, 0.12)"
        filter="blur(90px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-140px"
        right="-80px"
        width="320px"
        height="320px"
        borderRadius="full"
        bg="rgba(0, 170, 255, 0.08)"
        filter="blur(100px)"
        pointerEvents="none"
      />

      {/* Section Title */}
      <Box mb={10} textAlign="center" position="relative" zIndex={1}>
        <Heading
          as="h2"
          size="4xl"
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Party Highlights
        </Heading>

        <Box
          height="4px"
          width="80%"
          maxW="420px"
          bg="linear-gradient(90deg, transparent 0%, #00aaff 20%, #66d9ff 50%, #00aaff 80%, transparent 100%)"
          display="inline-block"
          mt={2}
          borderRadius="full"
        />

        <Text
          mt={4}
          color="gray.300"
          fontSize={{ base: "md", md: "lg" }}
          maxW="760px"
          mx="auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Relive the energy, music, and unforgettable moments from the nights
          that brought everyone together.
        </Text>
      </Box>

      {/* Grid Layout */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={8}
        position="relative"
        zIndex={1}
      >
        {videos.slice(0, visibleVideos).map((video, index) => (
          <Box
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="500"
          >
            <Box
              position="relative"
              pb="56.25%"
              h={0}
              overflow="hidden"
              borderRadius="20px"
              bg="black"
              border="1px solid rgba(0, 170, 255, 0.18)"
              boxShadow="0 12px 30px rgba(0, 0, 0, 0.4)"
              transition="all 0.35s ease"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "0 16px 40px rgba(0, 170, 255, 0.22)",
                borderColor: "rgba(0, 170, 255, 0.4)",
              }}
            >
              {playingVideo === video.src ? (
                <video
                  controls
                  autoPlay
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onEnded={() => setPlayingVideo(null)}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Box
                  as="button"
                  onClick={() => setPlayingVideo(video.src)}
                  position="absolute"
                  inset={0}
                  width="100%"
                  height="100%"
                  cursor="pointer"
                  role="group"
                  bg="transparent"
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    loading="lazy"
                    transition="transform 0.45s ease, filter 0.35s ease"
                    _groupHover={{
                      transform: "scale(1.06)",
                      filter: "brightness(1.08)",
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.08))"
                  />

                  {/* Highlight badge */}
                  <Badge
                    position="absolute"
                    top="16px"
                    left="16px"
                    bg="#00aaff"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="0.72rem"
                    letterSpacing="0.06em"
                    boxShadow="0 0 18px rgba(0, 170, 255, 0.35)"
                  >
                    HIGHLIGHT
                  </Badge>

                  {/* Play button */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width={{ base: "60px", md: "70px" }}
                    height={{ base: "60px", md: "70px" }}
                    borderRadius="full"
                    bg="rgba(0, 170, 255, 0.18)"
                    border="1px solid rgba(255,255,255,0.28)"
                    backdropFilter="blur(8px)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: "translate(-50%, -50%) scale(1.08)",
                      bg: "rgba(0, 170, 255, 0.28)",
                      boxShadow: "0 0 24px rgba(0, 170, 255, 0.28)",
                    }}
                  >
                    <Text
                      color="white"
                      fontSize="xl"
                      fontWeight="bold"
                      lineHeight="1"
                      ml="3px"
                    >
                      ▶
                    </Text>
                  </Box>

                  {/* Bottom content */}
                  <Box
                    position="absolute"
                    left={0}
                    right={0}
                    bottom={0}
                    p={{ base: 4, md: 5 }}
                    textAlign="left"
                  >
                    <Text
                      fontSize="xs"
                      color="#66d9ff"
                      mb={1}
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                      fontWeight="bold"
                    >
                      Featured Moment
                    </Text>

                    <Heading
                      as="h3"
                      size={{ base: "md", md: "lg" }}
                      color="white"
                    >
                      {video.title}
                    </Heading>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Show More Button */}
      {visibleVideos < videos.length && (
        <Box textAlign="center" mt={10} position="relative" zIndex={1}>
          <Button
            onClick={showMoreVideos}
            bg="#00aaff"
            color="white"
            size="lg"
            px={8}
            borderRadius="full"
            boxShadow="0 8px 24px rgba(0, 170, 255, 0.25)"
            _hover={{
              bg: "#008ecc",
              transform: "translateY(-2px)",
              boxShadow: "0 12px 28px rgba(0, 170, 255, 0.35)",
            }}
          >
            Show More Highlights
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PartyHighlights;
