import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        About Me
      </Heading>
      <Text fontSize="lg">
        Ivan Robles is a renowned DJ and producer from Puerto Rico, known for
        his passion for house music. With over 15 years of experience, he has
        become a household name in the music industry, hosting top radio shows
        and performing on international stages.
      </Text>
    </Box>
  );
};

export default About;
