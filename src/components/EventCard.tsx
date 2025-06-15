import { Box, Text } from "@chakra-ui/react";

import React from "react";

// Define the props type for the EventCard component
interface EventCardProps {
  date: string;
  location: string;
  time?: string; // Optional time prop
  description?: string; // Optional description prop
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  location,
  time,
  description,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="space-between" // Ensures footer is at the bottom
      height="100%" // Makes sure the card takes full height
      bg="white"
      boxShadow="md"
      p={4}
      transition="transform 0.2s, box-shadow 0.2s" // Transition for hover effect
      _hover={{
        transform: "scale(1.05)", // Scale up on hover
        boxShadow: "lg", // Increase shadow on hover
      }}
    >
      <Box>
        <Text fontWeight="bold" fontSize="lg">
          {date}
        </Text>
        <Text>{location}</Text>
        {time && <Text color="gray.500">{time}</Text>}{" "}
        {/* Only show time if it exists */}
        {description && <Text mt={2}>{description}</Text>}{" "}
        {/* Show description if it exists */}
      </Box>
    </Box>
  );
};

export default EventCard;
