import {
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
} from "react-icons/fa";

import { type EventItem, upcomingEvents } from "../../data/events";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";

const UpcomingEvents = () => {
  const events: EventItem[] = upcomingEvents;

  const [visibleEvents, setVisibleEvents] = useState(6);

  const showMoreEvents = () => {
    setVisibleEvents((prev) => Math.min(prev + 6, events.length));
  };

  const nextEvent = events[0];

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(180deg, #081018 0%, #0c1622 42%, #101214 100%)"
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 8 }}
      color="white"
    >
      {/* Decorative glows */}
      <Box
        position="absolute"
        top="-100px"
        left="-80px"
        width={{ base: "220px", md: "320px" }}
        height={{ base: "220px", md: "320px" }}
        borderRadius="full"
        bg="rgba(0, 170, 255, 0.12)"
        filter="blur(90px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-100px"
        width={{ base: "250px", md: "360px" }}
        height={{ base: "250px", md: "360px" }}
        borderRadius="full"
        bg="rgba(0, 38, 185, 0.10)"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Box maxW="1380px" mx="auto" position="relative" zIndex={1}>
        {/* Header */}
        <Stack
          gap={6}
          align="center"
          textAlign="center"
          mb={{ base: 10, md: 12 }}
        >
          <Badge
            px={4}
            py={1.5}
            borderRadius="full"
            bg="rgba(255,255,255,0.06)"
            color="#66d9ff"
            border="1px solid rgba(102, 217, 255, 0.24)"
            backdropFilter="blur(8px)"
            fontSize="0.78rem"
            letterSpacing="0.08em"
            textTransform="uppercase"
            data-aos="fade-up"
          >
            Next Dates
          </Badge>

          <Box data-aos="fade-up" data-aos-delay="100">
            <Heading
              as="h2"
              fontWeight="extrabold"
              lineHeight={{ base: "1.08", md: "1.02" }}
              fontSize={{ base: "2.5rem", md: "3.7rem", xl: "4.2rem" }}
              textShadow="2px 4px 18px rgba(0, 0, 0, 0.35)"
            >
              Upcoming Events
            </Heading>

            <Box
              mt={3}
              height="4px"
              width={{ base: "190px", md: "250px" }}
              borderRadius="full"
              bg="linear-gradient(90deg, #00aaff 0%, #66d9ff 100%)"
              mx="auto"
            />
          </Box>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.300"
            maxW="760px"
            lineHeight="1.85"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            Stay up to date with the next Ivan Robles experiences, including
            upcoming parties, special appearances, and unforgettable nights
            filled with music and energy.
          </Text>
        </Stack>

        {/* Featured next event */}
        {nextEvent && (
          <Box
            mb={{ base: 10, md: 12 }}
            data-aos="fade-up"
            data-aos-delay="220"
          >
            <Box
              position="relative"
              borderRadius="30px"
              overflow="hidden"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.10)"
              backdropFilter="blur(14px)"
              boxShadow="0 20px 60px rgba(0,0,0,0.35)"
            >
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={0}>
                {/* Left side */}
                <Stack gap={6} p={{ base: 5, md: 8 }} justify="center">
                  <Badge
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    bg="rgba(0,170,255,0.14)"
                    color="#66d9ff"
                    border="1px solid rgba(102,217,255,0.24)"
                    w="fit-content"
                  >
                    Featured Event
                  </Badge>

                  <Box>
                    <Text
                      color="#66d9ff"
                      fontSize="sm"
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                      fontWeight="bold"
                      mb={2}
                    >
                      Next Up
                    </Text>

                    <Heading
                      as="h3"
                      size={{ base: "lg", md: "xl" }}
                      color="white"
                      mb={3}
                    >
                      {nextEvent.location}
                    </Heading>

                    <Text
                      color="gray.300"
                      fontSize={{ base: "md", md: "lg" }}
                      lineHeight="1.8"
                    >
                      {nextEvent.description}
                    </Text>
                  </Box>

                  <Stack gap={3}>
                    <HStack align="start" gap={3}>
                      <Icon as={FaCalendarAlt} color="#66d9ff" mt="2px" />
                      <Text color="gray.200">{nextEvent.date}</Text>
                    </HStack>

                    <HStack align="start" gap={3}>
                      <Icon as={FaClock} color="#66d9ff" mt="2px" />
                      <Text color="gray.200">{nextEvent.time}</Text>
                    </HStack>

                    <HStack align="start" gap={3}>
                      <Icon as={FaMapMarkerAlt} color="#66d9ff" mt="2px" />
                      <Text color="gray.200">{nextEvent.location}</Text>
                    </HStack>
                  </Stack>

                  <HStack gap={4} flexWrap="wrap">
                    <Button
                      gap={2}
                      bg="#00aaff"
                      color="white"
                      size="lg"
                      px={8}
                      borderRadius="full"
                      boxShadow="0 10px 28px rgba(0, 170, 255, 0.28)"
                      _hover={{
                        bg: "#008ecc",
                        transform: "translateY(-2px)",
                        boxShadow: "0 14px 34px rgba(0, 170, 255, 0.35)",
                      }}
                      transition="all 0.3s ease"
                      onClick={() => {
                        if (nextEvent.ticketUrl) {
                          window.open(nextEvent.ticketUrl, "_blank");
                        }
                      }}
                      disabled={!nextEvent.ticketUrl}
                    >
                      <FaTicketAlt />
                      Get Tickets
                    </Button>

                    <Button
                      gap={2}
                      variant="outline"
                      size="lg"
                      px={8}
                      borderRadius="full"
                      color="white"
                      borderColor="rgba(255,255,255,0.28)"
                      bg="rgba(255,255,255,0.03)"
                      _hover={{
                        bg: "rgba(255,255,255,0.10)",
                        borderColor: "#66d9ff",
                        color: "#66d9ff",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.3s ease"
                      onClick={() => {
                        if (nextEvent.mapUrl) {
                          window.open(
                            nextEvent.mapUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                    >
                      <HiOutlineLocationMarker />
                      View Location
                    </Button>
                  </HStack>
                </Stack>

                {/* Right side */}
                <Box
                  p={{ base: 5, md: 8 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="linear-gradient(135deg, rgba(0,170,255,0.10), rgba(255,255,255,0.02))"
                >
                  <Box
                    w="100%"
                    maxW="420px"
                    borderRadius="28px"
                    bg="rgba(255,255,255,0.05)"
                    border="1px solid rgba(255,255,255,0.10)"
                    boxShadow="0 16px 40px rgba(0,0,0,0.24)"
                    p={{ base: 5, md: 6 }}
                    textAlign="center"
                  >
                    <Text
                      color="#66d9ff"
                      fontSize="sm"
                      textTransform="uppercase"
                      letterSpacing="0.12em"
                      fontWeight="bold"
                      mb={3}
                    >
                      Save the Date
                    </Text>

                    <Heading
                      as="p"
                      fontSize={{ base: "2rem", md: "2.8rem" }}
                      lineHeight="1.05"
                      mb={2}
                    >
                      {nextEvent.date}
                    </Heading>

                    <Text color="gray.300" mb={5}>
                      {nextEvent.time}
                    </Text>

                    <Badge
                      px={4}
                      py={2}
                      borderRadius="full"
                      bg="rgba(0,170,255,0.16)"
                      color="#66d9ff"
                      border="1px solid rgba(102,217,255,0.24)"
                      fontSize="0.8rem"
                    >
                      {nextEvent.status || "Coming Soon"}
                    </Badge>
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        )}

        {/* Event cards */}
        {events.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={8}>
            {events.slice(0, visibleEvents).map((event, index) => (
              <Box
                key={`${event.date}-${event.location}-${index}`}
                data-aos="fade-up"
                data-aos-delay={`${index * 80}`}
                data-aos-duration="500"
              >
                <Box
                  position="relative"
                  h="100%"
                  borderRadius="28px"
                  overflow="hidden"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.10)"
                  backdropFilter="blur(14px)"
                  boxShadow="0 20px 60px rgba(0,0,0,0.35)"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-6px)",
                    borderColor: "rgba(102, 217, 255, 0.20)",
                    boxShadow: "0 24px 60px rgba(0, 170, 255, 0.12)",
                  }}
                >
                  <Box
                    px={{ base: 4, md: 5 }}
                    py={4}
                    borderBottom="1px solid rgba(255,255,255,0.08)"
                    bg="rgba(255,255,255,0.03)"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap={3}
                  >
                    <HStack gap={3}>
                      <Box
                        width="10px"
                        height="10px"
                        borderRadius="full"
                        bg="#00aaff"
                        boxShadow="0 0 14px rgba(0,170,255,0.8)"
                      />
                      <Text
                        fontSize="sm"
                        color="#66d9ff"
                        fontWeight="bold"
                        letterSpacing="0.08em"
                        textTransform="uppercase"
                      >
                        Upcoming Date
                      </Text>
                    </HStack>

                    <Badge
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg="rgba(0,170,255,0.14)"
                      color="#66d9ff"
                      border="1px solid rgba(102,217,255,0.24)"
                    >
                      {event.status || "Coming Soon"}
                    </Badge>
                  </Box>

                  <Stack gap={5} p={{ base: 5, md: 6 }}>
                    <Box>
                      <Text
                        color="#66d9ff"
                        fontSize="sm"
                        textTransform="uppercase"
                        letterSpacing="0.08em"
                        fontWeight="bold"
                        mb={2}
                      >
                        {event.date}
                      </Text>

                      <Heading as="h3" size="md" color="white">
                        {event.location}
                      </Heading>
                    </Box>

                    <Stack gap={3}>
                      <HStack align="start" gap={3}>
                        <Icon as={FaClock} color="#66d9ff" mt="2px" />
                        <Text color="gray.300">{event.time}</Text>
                      </HStack>

                      <HStack align="start" gap={3}>
                        <Icon as={FaMapMarkerAlt} color="#66d9ff" mt="2px" />
                        <Text color="gray.300">{event.location}</Text>
                      </HStack>

                      <HStack align="start" gap={3}>
                        <Icon as={FaTicketAlt} color="#66d9ff" mt="2px" />
                        <Text color="gray.300">{event.description}</Text>
                      </HStack>
                    </Stack>

                    <Button
                      gap={2}
                      bg="#00aaff"
                      color="white"
                      size="md"
                      borderRadius="full"
                      boxShadow="0 10px 24px rgba(0, 170, 255, 0.22)"
                      _hover={{
                        bg: "#008ecc",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.3s ease"
                      onClick={() => {
                        if (event.ticketUrl) {
                          window.open(event.ticketUrl, "_blank");
                        }
                      }}
                      disabled={!event.ticketUrl}
                    >
                      <FaTicketAlt />
                      Get Tickets
                    </Button>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Box
            maxW="900px"
            mx="auto"
            borderRadius="28px"
            bg="rgba(255,255,255,0.05)"
            border="1px solid rgba(255,255,255,0.10)"
            backdropFilter="blur(14px)"
            boxShadow="0 20px 60px rgba(0,0,0,0.35)"
            p={{ base: 8, md: 10 }}
            textAlign="center"
          >
            <Text
              color="white"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              mb={3}
            >
              New dates coming soon
            </Text>
            <Text color="gray.400" maxW="620px" mx="auto" lineHeight="1.8">
              Stay tuned for upcoming parties, special appearances, and new
              event announcements from Ivan Robles.
            </Text>
          </Box>
        )}

        {/* Show More */}
        {visibleEvents < events.length && (
          <Box textAlign="center" mt={{ base: 10, md: 12 }}>
            <Button
              onClick={showMoreEvents}
              bg="#00aaff"
              color="white"
              size="lg"
              px={8}
              borderRadius="full"
              boxShadow="0 10px 28px rgba(0, 170, 255, 0.28)"
              _hover={{
                bg: "#008ecc",
                transform: "translateY(-2px)",
                boxShadow: "0 14px 34px rgba(0, 170, 255, 0.35)",
              }}
              transition="all 0.3s ease"
              data-aos="zoom-in"
            >
              Show More Events
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UpcomingEvents;
