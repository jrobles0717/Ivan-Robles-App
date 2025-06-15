import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";

import EventCard from "../EventCard";
import { useState } from "react";

const UpcomingEvents = () => {
  // Event data
  const events = [
    {
      date: "June 13, 2025",
      location: "Ocean Lab @ San Patricio",
      time: "9 PM",
    },
    {
      date: "June 14, 2025",
      location: "Gala Museo de Arte de PR @ Sheraton Convention Center",
    },
    { date: "June 14, 2025", location: "Vivo Beach Club" },
    { date: "June 20 & 21, 2025", location: "Mida Convention" },
    { date: "June 21, 2025", location: "FOK Cervecera", time: "8 PM" },
    {
      date: "June 21, 2025",
      location: "Ocean Lab @ San Patricio",
      time: "9 PM",
    },
    { date: "June 21, 2025", location: "San Juan Hotel", time: "10 PM" },
    { date: "June 22, 2025", location: "Tryst Hotel" },
    {
      date: "June 27, 2025",
      location: "Ocean Lab @ San Patricio",
      time: "9 PM",
    },
    { date: "June 28, 2025", location: "Tamboo Rincon", time: "6 PM" },
    { date: "June 29, 2025", location: "El San Juan Beach Club", time: "1 PM" },
    {
      date: "Every Friday, July 2025",
      location: "Ocean Lab @ San Patricio",
      time: "9 PM",
    },
    {
      date: "July 25, 2025",
      location: "La Parguera",
      description: "Class Reunion",
    },
    {
      date: "August 24, 2025",
      location: "Fiesta en La Playa @ Caribe Hilton",
      time: "1 PM",
    },
    { date: "September 2025", location: "Ibiza, Spain" },
  ];

  // State to manage how many events to show
  const [visibleEvents, setVisibleEvents] = useState(6);

  // Function to show more events
  const showMoreEvents = () => {
    setVisibleEvents((prev) => prev + 6); // Show 6 more events each time
  };

  return (
    <Box bg="#2f2626" py={20} px={6}>
      {/* Title Section */}
      <Box mb={8} textAlign="center">
        <Heading
          as="h2"
          size="4xl"
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          data-aos="fade-up" // AOS animation for the title
          data-aos-duration="800" // Animation duration
        >
          Upcoming Events
        </Heading>
        <Box
          height="4px"
          width="80%"
          bg="#00aaff"
          display="inline-block"
          mt={2}
          borderRadius="md"
          data-aos="fade-up" // AOS animation for the underline
          data-aos-delay="100" // Reduced delay for the underline animation
          data-aos-duration="800"
        />
      </Box>

      {/* Grid Layout for Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }} // 1 column on mobile, 2 on tablets, 3 on desktops
        gap={6} // Spacing between cards
        mx="auto"
        maxW="1200px" // Limit the grid width
      >
        {events.slice(0, visibleEvents).map((event, index) => (
          <Box
            key={index}
            data-aos="fade-up" // AOS animation for each card
            data-aos-delay={`${index * 50}`} // Reduced staggered delay for faster rendering
            data-aos-duration="600" // Reduced animation duration for faster appearance
          >
            <EventCard
              date={event.date}
              location={event.location}
              time={event.time}
              description={event.description}
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* Show More Button */}
      {visibleEvents < events.length && (
        <Box textAlign="center" mt={8}>
          <Button
            onClick={showMoreEvents}
            bg="#00aaff"
            color="white"
            size="lg"
            _hover={{ bg: "#0077cc" }}
            data-aos="zoom-in" // AOS animation for the button
            data-aos-delay="100" // Reduced delay for the button animation
            data-aos-duration="600" // Reduced animation duration for faster appearance
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UpcomingEvents;
