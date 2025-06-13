import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

import { useColorModeValue } from "@chakra-ui/system";

interface EventCardProps {
  date: string;
  location: string;
  time?: string; // Optional time
  description?: string; // Optional description
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  location,
  time,
  description,
}) => {
  // Dynamically set the card background and text color based on the theme
  const cardBg = useColorModeValue("white", "gray.800"); // Light for dark backgrounds, dark for light backgrounds
  const cardTextColor = useColorModeValue("black", "white"); // Text color to contrast with the background
  const cardDescription = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      bg={cardBg}
      color={cardTextColor}
      p={6}
      borderRadius="lg"
      boxShadow="0 8px 20px rgba(0, 0, 0, 0.2)"
      w="100%"
      maxW="600px"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 12px 25px rgba(0, 0, 0, 0.3)",
      }}
    >
      <VStack align="start" gap={4}>
        {/* Date */}
        <HStack gap={3}>
          <Icon as={FaCalendarAlt} boxSize={5} />
          <Text fontSize="lg" fontWeight="bold">
            {date}
          </Text>
        </HStack>

        {/* Location */}
        <HStack gap={3}>
          <Icon as={FaMapMarkerAlt} boxSize={5} />
          <Text fontSize="md" fontWeight="semibold">
            {location}
          </Text>
        </HStack>

        {/* Time (optional) */}
        {time && (
          <HStack gap={3}>
            <Icon as={FaClock} boxSize={5} />
            <Text fontSize="sm" fontWeight="medium">
              {time}
            </Text>
          </HStack>
        )}

        {/* Description (optional) */}
        {description && (
          <Text fontSize="sm" color={cardDescription}>
            {description}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default EventCard;
