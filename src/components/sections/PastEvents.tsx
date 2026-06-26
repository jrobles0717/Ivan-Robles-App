import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { pastEvents } from "../../data/highlights";
import { useState } from "react";

const PastEvents = () => {
  const events = pastEvents;

  const [visibleEvents, setVisibleEvents] = useState(3);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const showMoreEvents = () => {
    setVisibleEvents((prev) => Math.min(prev + 3, events.length));
  };

  return (
    <Box
      bg="linear-gradient(180deg, #111111 0%, #0b0b0b 100%)"
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 8 }}
    >
      {/* Section Title */}
      <Box mb={10} textAlign="center">
        <Heading
          as="h2"
          size="4xl"
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Past Events
        </Heading>

        <Box
          height="4px"
          width="60%"
          bg="whiteAlpha.500"
          display="inline-block"
          mt={2}
          borderRadius="md"
        />

        <Text
          mt={4}
          color="gray.300"
          fontSize={{ base: "md", md: "lg" }}
          maxW="700px"
          mx="auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A look back at unforgettable moments, music, and experiences from
          previous events.
        </Text>
      </Box>

      {/* Event Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={8}>
        {events.slice(0, visibleEvents).map((event, index) => (
          <Box
            key={index}
            bg="#181818"
            border="1px solid rgba(255,255,255,0.08)"
            borderRadius="18px"
            overflow="hidden"
            boxShadow="0 10px 30px rgba(0, 0, 0, 0.35)"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "0 16px 35px rgba(0, 170, 255, 0.18)",
              borderColor: "rgba(0, 170, 255, 0.35)",
            }}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="500"
          >
            {/* Media Area */}
            <Box
              position="relative"
              pb="56.25%"
              h={0}
              overflow="hidden"
              bg="black"
            >
              {playingVideo === event.src ? (
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
                  <source src={event.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Box
                  as="button"
                  onClick={() => setPlayingVideo(event.src)}
                  position="absolute"
                  inset={0}
                  width="100%"
                  height="100%"
                  cursor="pointer"
                  role="group"
                >
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    filter="grayscale(35%)"
                    transition="all 0.35s ease"
                    _groupHover={{
                      filter: "grayscale(0%)",
                      transform: "scale(1.04)",
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.15))"
                  />

                  {/* Archive badge */}
                  <Badge
                    position="absolute"
                    top="14px"
                    left="14px"
                    bg="rgba(0,0,0,0.72)"
                    color="#00aaff"
                    border="1px solid rgba(0,170,255,0.35)"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="0.72rem"
                    letterSpacing="0.06em"
                  >
                    ARCHIVE
                  </Badge>

                  {/* Play button */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width={{ base: "56px", md: "64px" }}
                    height={{ base: "56px", md: "64px" }}
                    borderRadius="full"
                    bg="rgba(255,255,255,0.14)"
                    backdropFilter="blur(6px)"
                    border="1px solid rgba(255,255,255,0.25)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _groupHover={{
                      bg: "rgba(0,170,255,0.22)",
                      transform: "translate(-50%, -50%) scale(1.08)",
                    }}
                  >
                    <Text
                      color="white"
                      fontSize="lg"
                      fontWeight="bold"
                      lineHeight="1"
                      ml="2px"
                    >
                      ▶
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>

            {/* Card Footer */}
            <Box p={5}>
              <Text
                fontSize="sm"
                color="#00aaff"
                mb={2}
                textTransform="uppercase"
                letterSpacing="0.08em"
                fontWeight="semibold"
              >
                {event.date}
              </Text>

              <Heading as="h3" size="md" color="white" mb={3}>
                {event.title}
              </Heading>

              <Button
                size="sm"
                variant="outline"
                borderColor="#00aaff"
                color="#00aaff"
                _hover={{
                  bg: "#00aaff",
                  color: "white",
                }}
                onClick={() => setPlayingVideo(event.src)}
              >
                Watch Recap
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Show More */}
      {visibleEvents < events.length && (
        <Box textAlign="center" mt={10}>
          <Button
            onClick={showMoreEvents}
            variant="outline"
            borderColor="#00aaff"
            color="#00aaff"
            size="lg"
            _hover={{
              bg: "#00aaff",
              color: "white",
            }}
          >
            Show More Past Events
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default PastEvents;
