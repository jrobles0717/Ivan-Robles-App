import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      position="relative"
      py={10}
      px={6}
      bg="#1a1a1a" // Dark background for contrast
      color="white"
      overflow="hidden"
    >
      {/* Background Image */}
      <Image
        src="/src/assets/dj-background.jpg" // Replace with your background image
        alt="DJ Performance"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex="0"
        opacity="0.3" // Slightly transparent for overlay effect
      />

      {/* Overlay for better text visibility */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)" // Dark overlay
        zIndex="1"
      />

      {/* Main Content */}
      <Flex
        direction="column"
        justify="center"
        align="center"
        zIndex="2"
        position="relative"
        textAlign="center"
        maxW="1200px"
        mx="auto"
      >
        {/* Heading */}
        <Heading
          as="h1"
          size="2xl"
          mb={6}
          fontWeight="bold"
          textTransform="uppercase"
          color="#ff5e9c" // Brand color for the heading
        >
          About Me
        </Heading>

        {/* Bio Section */}
        <Text fontSize="lg" mb={10} maxW="800px" lineHeight="1.8">
          Ivan Robles is one of Puerto Rico's most celebrated DJs and producers,
          known for his electrifying performances and passion for house music.
          With over 15 years of experience, Ivan has become a household name in
          the music industry, captivating audiences with his unique sound and
          energy. From hosting top-rated radio shows to performing on
          international stages, Ivan has built a reputation as a pioneer in the
          electronic music scene. His ability to connect with the crowd and
          create unforgettable experiences has earned him a loyal following and
          recognition as a top DJ in the Caribbean and beyond.
        </Text>

        {/* Images Section */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          mb={10}
        >
          <GridItem>
            <Image
              src="/src/assets/ivan-robles-about-1.jpg" // Replace with an image of him performing
              alt="Ivan Performing"
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
              height="300px"
              width="100%"
              transition="transform 0.3s, box-shadow 0.3s" // Transition for hover effect
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "xl", // Increase shadow on hover
              }}
            />
          </GridItem>
          <GridItem>
            <Image
              src="/src/assets/ivan-robles-about-2.jpg" // Replace with an image of him at a radio show
              alt="Ivan at Radio Show"
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
              height="300px"
              width="100%"
              transition="transform 0.3s, box-shadow 0.3s" // Transition for hover effect
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "xl", // Increase shadow on hover
              }}
            />
          </GridItem>
          <GridItem>
            <Image
              src="/src/assets/ivan-robles-about-3.jpg" // Replace with an image of him with the crowd
              alt="Ivan with the Crowd"
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
              height="300px"
              width="100%"
              transition="transform 0.3s, box-shadow 0.3s" // Transition for hover effect
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "xl", // Increase shadow on hover
              }}
            />
          </GridItem>
        </Grid>

        {/* Closing Statement */}
        <VStack gap={4} maxW="800px">
          <Text fontSize="lg" fontWeight="bold">
            "Music is not just sound; it's an emotion, a connection, and a way
            to bring people together."
          </Text>
          <Text fontSize="lg">
            Whether he's performing at a packed club, hosting a radio show, or
            producing his next hit track, Ivan Robles continues to push the
            boundaries of electronic music and inspire the next generation of
            DJs.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default About;
