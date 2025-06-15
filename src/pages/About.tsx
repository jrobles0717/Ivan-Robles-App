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
      py={16} // Increased padding for breathing room
      px={8}
      bg="#1a1a1a" // Dark background for contrast
      color="white"
      overflow="hidden"
    >
      {/* Background Image */}
      <Image
        src="/assets/dj-background.jpg" // Replace with your background image
        alt="DJ Performance"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex="0"
        opacity="0.2" // Slightly transparent for overlay effect
      />

      {/* Overlay for better text visibility */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)" // Dark overlay
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
        {/* Heading with Underline */}
        <Box
          mb={12}
          data-aos="fade-up"
          data-aos-duration="800" // Faster animation
          data-aos-offset="100" // Trigger earlier
        >
          <Heading
            as="h1"
            size="3xl"
            fontWeight="bold"
            textTransform="uppercase"
            color="white" // Consistent white color
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)" // Subtle text shadow for depth
          >
            About Me
          </Heading>
          <Box
            height="4px" // Thickness of the underline
            width="80px" // Fixed width for the underline
            bg="#00aaff" // Underline color updated to branding blue
            mx="auto" // Center the underline
            mt={2} // Margin top for spacing
            borderRadius="md" // Rounded edges for a modern look
          />
        </Box>

        {/* Bio Section */}
        <Text
          fontSize="lg"
          mb={16} // Increased margin for spacing
          maxW="800px"
          lineHeight="1.8"
          px={4}
          data-aos="fade-up"
          data-aos-duration="800" // Faster animation
          data-aos-delay="100" // Minimal delay
          data-aos-offset="100" // Trigger earlier
        >
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
          gap={8} // Increased gap for better spacing
          mb={16} // Added margin for spacing
        >
          <GridItem
            data-aos="fade-up"
            data-aos-duration="800" // Faster animation
            data-aos-delay="200" // Minimal delay
            data-aos-offset="100" // Trigger earlier
          >
            <Image
              src="/assets/ivan-robles-about-1.jpg" // Replace with an image of him performing
              alt="Ivan Performing"
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
              height="300px"
              width="100%"
              transition="transform 0.3s, box-shadow 0.3s" // Transition for hover effect
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "0 0 15px #00aaff", // Updated hover shadow color
              }}
            />
          </GridItem>
          <GridItem
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-offset="100"
          >
            <Image
              src="/assets/ivan-robles-about-2.jpg" // Replace with an image of him at a radio show
              alt="Ivan at Radio Show"
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
              height="300px"
              width="100%"
              transition="transform 0.3s, box-shadow 0.3s" // Transition for hover effect
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "0 0 15px #00aaff", // Updated hover shadow color
              }}
            />
          </GridItem>
          <GridItem
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-offset="100"
          >
            <Image
              src="/assets/ivan-robles-about-3.jpg" // Replace with an image of him with the crowd
              alt="Ivan with the Crowd"
              borderRadius="md"
              boxShadow="lg"
              objectFit="cover"
              height="300px"
              width="100%"
              transition="transform 0.3s, box-shadow 0.3s" // Transition for hover effect
              _hover={{
                transform: "scale(1.05)", // Scale up on hover
                boxShadow: "0 0 15px #00aaff", // Updated hover shadow color
              }}
            />
          </GridItem>
        </Grid>

        {/* Closing Statement */}
        <VStack gap={6} maxW="800px">
          <Text
            fontSize="lg"
            fontWeight="bold"
            textAlign="center"
            px={4}
            lineHeight="1.8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500" // Faster delay
            data-aos-offset="100" // Trigger earlier
          >
            "Music is not just sound; it's an emotion, a connection, and a way
            to bring people together."
          </Text>
          <Text
            fontSize="lg"
            textAlign="center"
            px={4}
            lineHeight="1.8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600" // Faster delay
            data-aos-offset="100" // Trigger earlier
          >
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
