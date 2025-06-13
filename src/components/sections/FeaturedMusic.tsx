import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import YouTubeVideo from "../YouTubeVideo";

const FeaturedMusic = () => {
  return (
    <Box bg="#1a1a1a" py={20} px={6}>
      <Box mb={8} textAlign="center">
        <Heading
          as="h2"
          size="4xl" // Same size as main title
          fontWeight="bold"
          color="white"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
        >
          Featured Music
        </Heading>
        <Box
          height="4px"
          width="80%"
          bg="#00aaff" // Branding light blue
          display="inline-block"
          mt={2}
          borderRadius="md"
        />
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        {/* YouTube Video Embeds */}
        <YouTubeVideo videoId="VD1bnxRvLjM" />
        <YouTubeVideo videoId="Ey59V0IVNfg" />
        <YouTubeVideo videoId="Xx2RksffUtg" />
        <YouTubeVideo videoId="PWzr9guQQuQ" />
        <YouTubeVideo videoId="SFFXDiZWbJ0" />
        <YouTubeVideo videoId="bX023by-zig" />
        <YouTubeVideo videoId="zL6weacPPJU" />
        <YouTubeVideo videoId="GckhNkkz9ik" />
      </SimpleGrid>
    </Box>
  );
};

export default FeaturedMusic;
