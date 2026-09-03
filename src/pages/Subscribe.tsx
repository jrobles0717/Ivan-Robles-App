import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import Seo from "../components/common/Seo";
import type { FormData, FormErrors, OptionType } from "../util/types";
import {
  countryOptions,
  customSelectStyles,
  referralOptions,
} from "../util/helper";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import Confetti from "react-confetti";
import Select, { type ActionMeta, type SingleValue } from "react-select";

import { HiPaperAirplane } from "react-icons/hi";

const ChakraForm = chakra("form");

const Subscribe = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: null,
    referral: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (
    selectedOption: SingleValue<OptionType>,
    action: ActionMeta<OptionType>
  ): void => {
    const key = action.name as keyof FormData;
    setFormData((prev) => ({ ...prev, [key]: selectedOption }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.referral) newErrors.referral = "Please select an option.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validate()) return;

    const payload = new URLSearchParams();
    payload.append("form-name", "subscribe-form");
    payload.append("name", formData.name);
    payload.append("email", formData.email);

    if (formData.country) payload.append("country", formData.country.value);
    if (formData.referral) payload.append("referral", formData.referral.value);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      setSubmitted(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 6000);
      setFormData({
        name: "",
        email: "",
        country: null,
        referral: null,
      });
      setErrors({});
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  return (
    <>
      <Seo
        title="Join the Guest List | Iván Robles"
        description="Subscribe to get event updates, guest list access, and new music releases from Iván Robles straight to your inbox."
        path="/subscribe"
      />
      <Box
        position="relative"
        overflow="hidden"
        bg="linear-gradient(180deg, #08111b 0%, #0b1420 45%, #0f1012 100%)"
        color="white"
        py={{ base: 16, md: 20 }}
        px={{ base: 5, md: 8 }}
        minH="100vh"
      >
      {/* Background image */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="url('/assets/dj-background-2.webp')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity={0.14}
      />

      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(7,13,22,0.88) 0%, rgba(8,14,24,0.94) 50%, rgba(10,10,12,0.96) 100%)"
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
        filter={{ base: "none", md: "blur(90px)" }}
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
        filter={{ base: "none", md: "blur(100px)" }}
        zIndex={1}
        pointerEvents="none"
      />

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 20,
            pointerEvents: "none",
          }}
        />
      )}

      <Box maxW="1380px" mx="auto" position="relative" zIndex={2}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 10, lg: 12 }}
          alignItems="center"
        >
          {/* Left Side */}
          <Stack
            gap={6}
            textAlign={{ base: "center", lg: "left" }}
            align={{ base: "center", lg: "flex-start" }}
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
              Join the Guest List
            </Badge>

            <Box data-aos="fade-up" data-aos-delay="100">
              <Heading
                as="h1"
                fontWeight="extrabold"
                lineHeight={{ base: "1.08", md: "1.02" }}
                fontSize={{ base: "2.5rem", md: "4rem", xl: "4.4rem" }}
                textShadow="2px 4px 18px rgba(0, 0, 0, 0.35)"
              >
                Subscribe
              </Heading>

              <Box
                mt={3}
                height="4px"
                width={{ base: "170px", md: "220px" }}
                borderRadius="full"
                bg="linear-gradient(90deg, #00aaff 0%, #66d9ff 100%)"
                mx={{ base: "auto", lg: "0" }}
              />
            </Box>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.300"
              maxW="620px"
              lineHeight="1.85"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              Subscribe now to get notified about upcoming events, new music
              drops, exclusive parties, premieres, and special Ivan Robles
              updates.
            </Text>

            <HStack
              gap={3}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              data-aos="fade-up"
              data-aos-delay="260"
            >
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
              >
                Event Updates
              </Badge>
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
              >
                New Music Drops
              </Badge>
              <Badge
                px={3}
                py={1.5}
                borderRadius="full"
                bg="whiteAlpha.100"
                color="white"
              >
                Exclusive Parties
              </Badge>
            </HStack>

            <Box
              w="100%"
              maxW="620px"
              p={{ base: 5, md: 6 }}
              borderRadius="28px"
              bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.10)"
              backdropFilter={{ base: "none", md: "blur(14px)" }}
              boxShadow="0 20px 60px rgba(0,0,0,0.30)"
              data-aos="fade-up"
              data-aos-delay="340"
            >
              <Text
                color="#66d9ff"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.1em"
                fontWeight="bold"
                mb={3}
              >
                Why subscribe?
              </Text>

              <Stack gap={3}>
                <Text color="gray.300">
                  • Get priority updates on upcoming Ivan Robles events
                </Text>
                <Text color="gray.300">
                  • Be the first to know about new music and premieres
                </Text>
                <Text color="gray.300">
                  • Receive exclusive announcements and special invites
                </Text>
              </Stack>
            </Box>
          </Stack>

          {/* Right Side / Form */}
          <Box
            data-aos="fade-left"
            borderRadius="30px"
            bg="rgba(255,255,255,0.05)"
            border="1px solid rgba(255,255,255,0.10)"
            backdropFilter={{ base: "none", md: "blur(14px)" }}
            boxShadow="0 20px 60px rgba(0,0,0,0.35)"
            overflow="hidden"
          >
            <Box
              px={{ base: 5, md: 6 }}
              py={4}
              borderBottom="1px solid rgba(255,255,255,0.08)"
              bg="rgba(255,255,255,0.03)"
            >
              <Text
                fontSize="sm"
                color="#66d9ff"
                fontWeight="bold"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                Subscription Form
              </Text>
            </Box>

            <ChakraForm
              name="subscribe-form"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              p={{ base: 5, md: 6 }}
            >
              <input type="hidden" name="form-name" value="subscribe-form" />
              <p style={{ display: "none" }}>
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <Stack gap={5}>
                {!submitted ? (
                  <>
                    <FormControl isInvalid={!!errors.name}>
                      <FormLabel color="white">Full Name</FormLabel>
                      <Input
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        bg="rgba(255,255,255,0.05)"
                        border="1px solid rgba(255,255,255,0.12)"
                        color="white"
                        _placeholder={{ color: "gray.500" }}
                        _hover={{ borderColor: "rgba(102,217,255,0.24)" }}
                        _focus={{
                          borderColor: "#66d9ff",
                          boxShadow: "0 0 0 1px #66d9ff",
                        }}
                        height="52px"
                      />
                      <FormErrorMessage color="#ff6b6b">
                        {errors.name}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel color="white">Email Address</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        bg="rgba(255,255,255,0.05)"
                        border="1px solid rgba(255,255,255,0.12)"
                        color="white"
                        _placeholder={{ color: "gray.500" }}
                        _hover={{ borderColor: "rgba(102,217,255,0.24)" }}
                        _focus={{
                          borderColor: "#66d9ff",
                          boxShadow: "0 0 0 1px #66d9ff",
                        }}
                        height="52px"
                      />
                      <FormErrorMessage color="#ff6b6b">
                        {errors.email}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.country}>
                      <FormLabel color="white">Country / Region</FormLabel>
                      <Select
                        name="country"
                        options={countryOptions}
                        placeholder="Select your country"
                        value={formData.country}
                        onChange={handleDropdownChange}
                        styles={customSelectStyles}
                        menuPortalTarget={
                          typeof document !== "undefined"
                            ? document.body
                            : undefined
                        }
                        menuPosition="fixed"
                      />

                      <FormErrorMessage color="#ff6b6b">
                        {errors.country}
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.referral}>
                      <FormLabel color="white">
                        How did you hear about me?
                      </FormLabel>
                      <Select
                        name="referral"
                        options={referralOptions}
                        placeholder="Select an option"
                        value={formData.referral}
                        onChange={handleDropdownChange}
                        styles={customSelectStyles}
                        menuPortalTarget={
                          typeof document !== "undefined"
                            ? document.body
                            : undefined
                        }
                        menuPosition="fixed"
                      />

                      <FormErrorMessage color="#ff6b6b">
                        {errors.referral}
                      </FormErrorMessage>
                    </FormControl>

                    <Button
                      type="submit"
                      bg="#00aaff"
                      color="white"
                      size="lg"
                      width="full"
                      borderRadius="full"
                      boxShadow="0 10px 28px rgba(0, 170, 255, 0.28)"
                      _hover={{
                        bg: "#008ecc",
                        transform: "translateY(-2px)",
                        boxShadow: "0 14px 34px rgba(0, 170, 255, 0.35)",
                      }}
                      transition="all 0.3s ease"
                    >
                      <HiPaperAirplane />
                      Subscribe
                    </Button>
                  </>
                ) : (
                  <Box textAlign="center" py={{ base: 8, md: 10 }}>
                    <VStackCustom />
                  </Box>
                )}
              </Stack>
            </ChakraForm>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

const VStackCustom = () => {
  return (
    <Stack gap={4} align="center">
      <Badge
        px={4}
        py={1.5}
        borderRadius="full"
        bg="rgba(0,170,255,0.14)"
        color="#66d9ff"
        border="1px solid rgba(102,217,255,0.24)"
      >
        Subscription Confirmed
      </Badge>

      <Heading as="h3" size="lg" color="white">
        Thank you for subscribing!
      </Heading>

      <Text color="gray.300" maxW="420px" lineHeight="1.8">
        You&apos;ll now receive updates on upcoming events, new music, exclusive
        content, and all things Ivan Robles.
      </Text>
    </Stack>
  );
};

export default Subscribe;
