import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { newsItems } from "../../data/news";
import { FaExternalLinkAlt, FaNewspaper } from "react-icons/fa";

const News = () => {

  return (
    <Box
      as="section"
      id="news"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(180deg, #0a1018 0%, #0d1622 42%, #101214 100%)"
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
        filter={{ base: "none", md: "blur(90px)" }}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-100px"
        width={{ base: "240px", md: "360px" }}
        height={{ base: "240px", md: "360px" }}
        borderRadius="full"
        bg="rgba(0, 38, 185, 0.10)"
        filter={{ base: "none", md: "blur(100px)" }}
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
            backdropFilter={{ base: "none", md: "blur(8px)" }}
            fontSize="0.78rem"
            letterSpacing="0.08em"
            textTransform="uppercase"
            data-aos="fade-up"
          >
            Latest Coverage
          </Badge>

          <Box data-aos="fade-up" data-aos-delay="100">
            <Heading
              as="h2"
              fontWeight="extrabold"
              lineHeight={{ base: "1.08", md: "1.02" }}
              fontSize={{ base: "2.5rem", md: "3.7rem", xl: "4.2rem" }}
              textShadow="2px 4px 18px rgba(0, 0, 0, 0.35)"
            >
              News
            </Heading>

            <Box
              mt={3}
              height="4px"
              width={{ base: "120px", md: "160px" }}
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
            Stay up to date with the latest news, press features, and media
            coverage surrounding Ivan Robles and his music.
          </Text>
        </Stack>

        {/* News cards */}
        <SimpleGrid
          columns={{ base: 1, md: newsItems.length > 1 ? 2 : 1 }}
          gap={8}
          maxW={newsItems.length === 1 ? "680px" : "1200px"}
          mx="auto"
        >
          {newsItems.map((item, index) => (
            <Box
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="500"
            >
              <Box
                position="relative"
                h="100%"
                borderRadius="28px"
                overflow="hidden"
                bg="rgba(255,255,255,0.05)"
                border="1px solid rgba(255,255,255,0.10)"
                backdropFilter={{ base: "none", md: "blur(14px)" }}
                boxShadow="0 20px 60px rgba(0,0,0,0.35)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  borderColor: "rgba(102, 217, 255, 0.20)",
                  boxShadow: "0 24px 60px rgba(0, 170, 255, 0.12)",
                }}
              >
                {/* Top bar */}
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
                      {item.date}
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
                    {item.category}
                  </Badge>
                </Box>

                {/* Content */}
                <Stack gap={5} p={{ base: 5, md: 6 }}>
                  <HStack gap={3} align="flex-start">
                    <Box
                      mt="2px"
                      color="#66d9ff"
                      fontSize="xl"
                      flexShrink={0}
                    >
                      <FaNewspaper />
                    </Box>
                    <Heading as="h3" size="md" color="white" lineHeight="1.3">
                      {item.title}
                    </Heading>
                  </HStack>

                  <Text color="gray.400" fontSize="sm" lineHeight="1.8">
                    {item.summary}
                  </Text>

                  <Button
                    gap={2}
                    variant="outline"
                    size="md"
                    px={6}
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
                    alignSelf="flex-start"
                    onClick={() =>
                      window.open(item.url, "_blank", "noopener,noreferrer")
                    }
                  >
                    <FaExternalLinkAlt />
                    Read Article
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default News;
