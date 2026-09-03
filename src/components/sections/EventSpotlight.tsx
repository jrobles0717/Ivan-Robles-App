import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { featuredEvent } from "../../data/events";
import { FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";
import { useState } from "react";

const EventSpotlight = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <Box
      as="section"
      id="event-spotlight"
      bg="linear-gradient(180deg, #0f0f10 0%, #0b1420 50%, #0b1620 100%)"
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 8 }}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative glows */}
      <Box
        position="absolute"
        top="-120px"
        right="-80px"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="rgba(255, 122, 0, 0.10)"
        filter={{ base: "none", md: "blur(100px)" }}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-140px"
        left="-80px"
        width="320px"
        height="320px"
        borderRadius="full"
        bg="rgba(0, 170, 255, 0.12)"
        filter={{ base: "none", md: "blur(100px)" }}
        pointerEvents="none"
      />

      {/* Section Title */}
      <Box mb={10} textAlign="center" position="relative" zIndex={1}>
        <Badge
          px={4}
          py={1.5}
          borderRadius="full"
          bg="rgba(255,255,255,0.06)"
          color="#66d9ff"
          border="1px solid rgba(102, 217, 255, 0.22)"
          backdropFilter={{ base: "none", md: "blur(8px)" }}
          fontSize="0.75rem"
          letterSpacing="0.08em"
          textTransform="uppercase"
          mb={4}
          data-aos="fade-down"
        >
          Next Event
        </Badge>

        <Heading
          as="h2"
          size="4xl"
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {featuredEvent.title}
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
          color="#66d9ff"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="0.14em"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {featuredEvent.edition}
        </Text>

        <Text
          mt={2}
          color="gray.300"
          fontSize={{ base: "md", md: "lg" }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {featuredEvent.date} • {featuredEvent.location}
        </Text>
      </Box>

      {/* Flyer + Video */}
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={8}
        maxW="1180px"
        mx="auto"
        alignItems="center"
        position="relative"
        zIndex={1}
      >
        {/* Flyer */}
        <Box data-aos="fade-right" data-aos-duration="500">
          <Box
            position="relative"
            borderRadius="24px"
            overflow="hidden"
            border="1px solid rgba(0, 170, 255, 0.18)"
            boxShadow="0 16px 44px rgba(0, 0, 0, 0.45)"
            transition="all 0.35s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "0 20px 52px rgba(0, 170, 255, 0.22)",
              borderColor: "rgba(0, 170, 255, 0.4)",
            }}
          >
            <Image
              src={featuredEvent.flyer}
              alt={`${featuredEvent.title} — ${featuredEvent.edition} flyer`}
              width="100%"
              display="block"
            />
          </Box>
        </Box>

        {/* Video + CTA */}
        <Stack gap={6} data-aos="fade-left" data-aos-duration="500">
          <Box
            position="relative"
            pb="56.25%"
            h={0}
            overflow="hidden"
            borderRadius="20px"
            bg="black"
            border="1px solid rgba(0, 170, 255, 0.18)"
            boxShadow="0 12px 30px rgba(0, 0, 0, 0.4)"
          >
            {playing ? (
              <video
                controls
                autoPlay
                playsInline
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onEnded={() => setPlaying(false)}
              >
                <source src={featuredEvent.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Box
                as="button"
                onClick={() => setPlaying(true)}
                position="absolute"
                inset={0}
                width="100%"
                height="100%"
                cursor="pointer"
                role="group"
                bg="transparent"
              >
                <Image
                  src={featuredEvent.videoPoster}
                  alt={`${featuredEvent.title} official trailer`}
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

                <Box
                  position="absolute"
                  inset={0}
                  bg="linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.16) 45%, rgba(0,0,0,0.06))"
                />

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
                  OFFICIAL TRAILER
                </Badge>

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
                  backdropFilter={{ base: "none", md: "blur(8px)" }}
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
              </Box>
            )}
          </Box>

          {/* Event card + CTA */}
          <Box
            px={{ base: 5, md: 6 }}
            py={{ base: 5, md: 6 }}
            borderRadius="20px"
            bg="rgba(255,255,255,0.05)"
            border="1px solid rgba(255,255,255,0.10)"
            backdropFilter={{ base: "none", md: "blur(14px)" }}
          >
            <Text
              fontSize="xs"
              color="#66d9ff"
              textTransform="uppercase"
              letterSpacing="0.08em"
              fontWeight="bold"
              mb={2}
            >
              Get Ready for the Summer Closing
            </Text>

            <Text color="gray.200" fontSize={{ base: "sm", md: "md" }} mb={5}>
              The beach, the music, and the energy — one last party to close
              the summer at {featuredEvent.location}.
            </Text>

            <HStack gap={4} flexWrap="wrap">
              <Button
                bg="#00aaff"
                color="white"
                size="lg"
                px={8}
                borderRadius="full"
                boxShadow="0 10px 30px rgba(0, 170, 255, 0.28)"
                _hover={{
                  bg: "#008ecc",
                  transform: "translateY(-2px)",
                  boxShadow: "0 14px 34px rgba(0, 170, 255, 0.38)",
                }}
                transition="all 0.3s ease"
                onClick={() =>
                  window.open(
                    featuredEvent.ticketUrl,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <FaTicketAlt />
                Get Tickets
              </Button>

              <Button
                variant="outline"
                size="lg"
                px={8}
                borderRadius="full"
                color="white"
                borderColor="rgba(255,255,255,0.35)"
                bg="rgba(255,255,255,0.03)"
                _hover={{
                  bg: "rgba(255,255,255,0.12)",
                  borderColor: "#66d9ff",
                  color: "#66d9ff",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s ease"
                onClick={() =>
                  window.open(
                    featuredEvent.mapUrl,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <FaMapMarkerAlt />
                Location
              </Button>
            </HStack>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default EventSpotlight;
