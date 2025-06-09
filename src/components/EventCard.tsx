import { Box, Heading, Text } from "@chakra-ui/react";

// Event Card Component
const EventCard = ({
  date,
  location,
  description,
}: {
  date: string;
  location: string;
  description: string;
}) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)"
      borderRadius="md"
      p={6}
      shadow="md"
      width="100%"
    >
      <Heading as="h3" size="md" mb={2} color="#00aaff">
        {date}
      </Heading>
      <Text fontWeight="bold" mb={2} color="white">
        {location}
      </Text>
      <Text color="white">{description}</Text>
    </Box>
  );
};

export default EventCard;
