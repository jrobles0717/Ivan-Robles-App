import {
  Badge,
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const About = () => {
  const milestones = [
    {
      year: "The Beginning",
      title: "Roots in the Booth",
      description:
        "Ivan Robles started his DJ career in Puerto Rico, building his craft set by set — developing a deep connection with house music and the culture around it.",
    },
    {
      year: "The Growth",
      title: "Expanding the Brand",
      description:
        "From club residencies and radio appearances to branded events like Fiesta en la Playa, his presence grew into one of Puerto Rico's most recognized house music experiences.",
    },
    {
      year: "Today",
      title: "DJ, Producer & Live Performer",
      description:
        "Now operating across multiple formats — live events, original productions, and The Ivan Robles Show — his work continues to push the house music scene forward.",
    },
  ];

  const stats = [
    { label: "Experience", value: "15+ Years" },
    { label: "Base", value: "Puerto Rico" },
    { label: "Genre", value: "House Music" },
    { label: "Role", value: "DJ & Producer" },
  ];

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(180deg, #08111b 0%, #0b1420 45%, #0f1012 100%)"
      color="white"
      py={{ base: 16, md: 20 }}
      px={{ base: 5, md: 8 }}
    >
      {/* Background image */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="url('/assets/dj-background.webp')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity={0.1}
      />

      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(7,13,22,0.90) 0%, rgba(8,14,24,0.95) 50%, rgba(10,10,12,0.97) 100%)"
        zIndex={1}
      />

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
        zIndex={1}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-100px"
        width={{ base: "240px", md: "360px" }}
        height={{ base: "240px", md: "360px" }}
        borderRadius="full"
        bg="rgba(0, 38, 185, 0.12)"
        filter="blur(100px)"
        zIndex={1}
        pointerEvents="none"
      />

      <Box maxW="1380px" mx="auto" position="relative" zIndex={2}>
        {/* Header */}
        <Stack
          gap={6}
          align="center"
          textAlign="center"
          mb={{ base: 10, md: 14 }}
        >
          <Badge
            px={4}
            py={1.5}
            borderRadius="full"
            bg="rgba(255,255,255,0.06)"
            color="#66d9ff"
            border="1px solid rgba(102, 217, 255, 0.24)"
            fontSize="0.78rem"
            letterSpacing="0.08em"
            textTransform="uppercase"
            data-aos="fade-up"
          >
            Artist Profile
          </Badge>

          <Box data-aos="fade-up" data-aos-delay="100">
            <Heading
              as="h1"
              fontWeight="extrabold"
              lineHeight={{ base: "1.08", md: "1.02" }}
              fontSize={{ base: "2.7rem", md: "4rem", xl: "4.6rem" }}
              textShadow="2px 4px 18px rgba(0, 0, 0, 0.35)"
            >
              About Ivan Robles
            </Heading>

            <Box
              mt={3}
              height="4px"
              width={{ base: "180px", md: "240px" }}
              borderRadius="full"
              bg="linear-gradient(90deg, #00aaff 0%, #66d9ff 100%)"
              mx="auto"
            />
          </Box>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.300"
            maxW="860px"
            lineHeight="1.85"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            House Music DJ, producer, and live performer from Puerto Rico —
            known for high-energy sets, signature events like Fiesta en la Playa,
            and a sound that transforms every night into an unforgettable experience.
          </Text>
        </Stack>

        {/* Editorial main block */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 10, lg: 12 }}
          alignItems="center"
          mb={{ base: 10, md: 14 }}
        >
          {/* Left content */}
          <Stack
            gap={6}
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Box data-aos="fade-right">
              <Text
                color="#66d9ff"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.1em"
                fontWeight="bold"
                mb={3}
              >
                The Energy Behind the Brand
              </Text>

              <Heading as="h2" size="xl" mb={4} lineHeight="1.2">
                More than music — a live atmosphere built through rhythm,
                identity, and presence
              </Heading>

              <Text color="gray.300" lineHeight="1.9" mb={5}>
                Ivan Robles has spent more than 15 years building a sound and
                presence that goes beyond performance. His sets are shaped by
                timing, emotion, and the ability to move a crowd from the first
                track to the final moment of the night.
              </Text>

              <Text color="gray.300" lineHeight="1.9">
                From clubs and radio to larger stages and branded events, his
                work reflects consistency, professionalism, and a commitment to
                creating premium nightlife experiences rooted in house music and
                connection.
              </Text>
            </Box>

            <Box
              w="100%"
              p={{ base: 6, md: 7 }}
              borderRadius="28px"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.10)"
              backdropFilter="blur(14px)"
              boxShadow="0 20px 60px rgba(0,0,0,0.30)"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <Text
                color="#66d9ff"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.1em"
                fontWeight="bold"
                mb={3}
              >
                Signature Vision
              </Text>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="white"
                lineHeight="1.7"
                mb={3}
              >
                “Music is not just sound — it is movement, emotion, and a way to
                bring people together.”
              </Text>

              <Text color="gray.400" lineHeight="1.8" fontSize="sm">
                Every performance is built to create atmosphere, elevate the
                room, and leave a lasting memory beyond the moment itself.
              </Text>
            </Box>
          </Stack>

          {/* Right image */}
          <Box data-aos="fade-left">
            <Box
              position="relative"
              maxW="560px"
              mx="auto"
              borderRadius="30px"
              overflow="hidden"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.10)"
              backdropFilter="blur(14px)"
              boxShadow="0 20px 60px rgba(0,0,0,0.35)"
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
                    Live Performance
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
                  Ivan Robles
                </Badge>
              </Box>

              <Box p={{ base: 4, md: 5 }}>
                <Image
                  src="/assets/ivan-robles-about-1.webp"
                  alt="Ivan Robles performing live"
                  borderRadius="24px"
                  width="100%"
                  height={{ base: "340px", md: "540px" }}
                  objectFit="cover"
                  transition="transform 0.35s ease"
                  _hover={{ transform: "scale(1.03)" }}
                />
              </Box>
            </Box>
          </Box>
        </SimpleGrid>

        {/* Stats strip */}
        <Box mb={{ base: 12, md: 16 }}>
          <SimpleGrid columns={{ base: 2, lg: 4 }} gap={4}>
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                p={{ base: 5, md: 6 }}
                borderRadius="24px"
                bg="rgba(255,255,255,0.05)"
                border="1px solid rgba(255,255,255,0.08)"
                textAlign="center"
                backdropFilter="blur(12px)"
                boxShadow="0 18px 40px rgba(0,0,0,0.20)"
                data-aos="fade-up"
                data-aos-delay={`${index * 80}`}
              >
                <Text
                  color="#66d9ff"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="0.08em"
                  mb={2}
                >
                  {stat.label}
                </Text>
                <Heading as="p" size="md" color="white">
                  {stat.value}
                </Heading>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Timeline + philosophy */}
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          gap={{ base: 10, xl: 8 }}
          mb={{ base: 12, md: 16 }}
          alignItems="start"
        >
          {/* Timeline */}
          <Box>
            <Stack gap={4} mb={8}>
              <Text
                color="#66d9ff"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.1em"
                fontWeight="bold"
                data-aos="fade-up"
              >
                Journey Timeline
              </Text>

              <Heading
                as="h2"
                size="lg"
                color="white"
                data-aos="fade-up"
                data-aos-delay="80"
              >
                Milestones through the years
              </Heading>
            </Stack>

            <Stack gap={5}>
              {milestones.map((item, index) => (
                <Box
                  key={item.year}
                  p={{ base: 6, md: 7 }}
                  borderRadius="28px"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid rgba(255,255,255,0.10)"
                  backdropFilter="blur(14px)"
                  boxShadow="0 20px 60px rgba(0,0,0,0.28)"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    borderColor: "rgba(102, 217, 255, 0.20)",
                    boxShadow: "0 24px 60px rgba(0, 170, 255, 0.10)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <Text
                    color="#66d9ff"
                    fontSize="sm"
                    textTransform="uppercase"
                    letterSpacing="0.1em"
                    fontWeight="bold"
                    mb={3}
                  >
                    {item.year}
                  </Text>

                  <Heading as="h3" size="md" mb={3}>
                    {item.title}
                  </Heading>

                  <Text color="gray.400" lineHeight="1.8" fontSize="sm">
                    {item.description}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Philosophy / profile card */}
          <Box
            p={{ base: 6, md: 8 }}
            borderRadius="30px"
            bg="rgba(255,255,255,0.05)"
            border="1px solid rgba(255,255,255,0.10)"
            backdropFilter="blur(14px)"
            boxShadow="0 20px 60px rgba(0,0,0,0.30)"
            h="100%"
            data-aos="fade-left"
          >
            <Text
              color="#66d9ff"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.1em"
              fontWeight="bold"
              mb={4}
            >
              Artist Philosophy
            </Text>

            <Heading as="h2" size="lg" mb={5} lineHeight="1.25">
              Built for movement, atmosphere, and unforgettable nights
            </Heading>

            <Stack gap={5}>
              <Box>
                <Text color="white" fontWeight="bold" fontSize="lg" mb={2}>
                  House-Driven Identity
                </Text>
                <Text color="gray.400" lineHeight="1.8" fontSize="sm">
                  A musical direction centered on groove, rhythm, and emotional
                  momentum designed to create lasting energy on the dance floor.
                </Text>
              </Box>

              <Box>
                <Text color="white" fontWeight="bold" fontSize="lg" mb={2}>
                  Crowd Connection
                </Text>
                <Text color="gray.400" lineHeight="1.8" fontSize="sm">
                  Every set is shaped around timing, reading the room, and
                  building a shared experience that feels authentic and alive.
                </Text>
              </Box>

              <Box>
                <Text color="white" fontWeight="bold" fontSize="lg" mb={2}>
                  Premium Event Presence
                </Text>
                <Text color="gray.400" lineHeight="1.8" fontSize="sm">
                  More than performance, the Ivan Robles brand represents a
                  polished nightlife identity where sound, visual atmosphere,
                  and energy come together.
                </Text>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Gallery / no repeated image */}
        <Box mb={{ base: 12, md: 16 }}>
          <Stack gap={4} align="center" textAlign="center" mb={8}>
            <Text
              color="#66d9ff"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="0.1em"
              fontWeight="bold"
              data-aos="fade-up"
            >
              Moments & Presence
            </Text>

            <Heading
              as="h2"
              size="lg"
              color="white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The atmosphere behind the artist
            </Heading>
          </Stack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <GridItem data-aos="fade-up" data-aos-delay="0">
              <Box
                borderRadius="28px"
                overflow="hidden"
                bg="rgba(255,255,255,0.05)"
                border="1px solid rgba(255,255,255,0.10)"
                boxShadow="0 20px 60px rgba(0,0,0,0.25)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 50px rgba(0,170,255,0.12)",
                  borderColor: "rgba(102, 217, 255, 0.20)",
                }}
              >
                <Image
                  src="/assets/ivan-robles-about-2.webp"
                  alt="Ivan at radio show"
                  objectFit="cover"
                  height="320px"
                  width="100%"
                  transition="transform 0.35s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>
            </GridItem>

            <GridItem data-aos="fade-up" data-aos-delay="100">
              <Box
                borderRadius="28px"
                overflow="hidden"
                bg="rgba(255,255,255,0.05)"
                border="1px solid rgba(255,255,255,0.10)"
                boxShadow="0 20px 60px rgba(0,0,0,0.25)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 50px rgba(0,170,255,0.12)",
                  borderColor: "rgba(102, 217, 255, 0.20)",
                }}
              >
                <Image
                  src="/assets/ivan-robles-about-3.jpg"
                  alt="Ivan with the crowd"
                  objectFit="cover"
                  height="320px"
                  width="100%"
                  transition="transform 0.35s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />
              </Box>
            </GridItem>

            <GridItem data-aos="fade-up" data-aos-delay="200">
              <Box
                h="100%"
                minH="320px"
                p={{ base: 6, md: 7 }}
                borderRadius="28px"
                bg="rgba(255,255,255,0.05)"
                border="1px solid rgba(255,255,255,0.10)"
                backdropFilter="blur(14px)"
                boxShadow="0 20px 60px rgba(0,0,0,0.30)"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text
                  color="#66d9ff"
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  fontWeight="bold"
                  mb={4}
                >
                  Artist Profile
                </Text>

                <Stack gap={4}>
                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="lg">
                      Sound
                    </Text>
                    <Text color="gray.400" fontSize="sm" lineHeight="1.8">
                      House-centered, emotionally driven, and built to create
                      momentum from start to finish.
                    </Text>
                  </Box>

                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="lg">
                      Presence
                    </Text>
                    <Text color="gray.400" fontSize="sm" lineHeight="1.8">
                      Confident, polished, and focused on turning every set into
                      an immersive crowd experience.
                    </Text>
                  </Box>

                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="lg">
                      Mission
                    </Text>
                    <Text color="gray.400" fontSize="sm" lineHeight="1.8">
                      To keep pushing the nightlife culture forward through
                      music, identity, and unforgettable energy.
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        {/* Final quote */}
        <Box
          maxW="920px"
          mx="auto"
          p={{ base: 6, md: 8 }}
          borderRadius="30px"
          bg="rgba(255,255,255,0.05)"
          border="1px solid rgba(255,255,255,0.10)"
          backdropFilter="blur(14px)"
          boxShadow="0 20px 60px rgba(0,0,0,0.30)"
          textAlign="center"
          data-aos="fade-up"
        >
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            lineHeight="1.7"
            color="white"
            mb={4}
          >
            “The goal is never just to play music — it&apos;s to create a
            feeling people remember.”
          </Text>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.300"
            lineHeight="1.9"
          >
            Through sound, atmosphere, and connection, Ivan Robles continues to
            shape nights that feel powerful in the moment and unforgettable
            after they end.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
