import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import type { FormData, FormErrors, OptionType } from "../util/types";
import {
  countryOptions,
  customSelectStyles,
  referralOptions,
} from "../util/helper";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

const ChakraForm = chakra("form");

import Confetti from "react-confetti";
import Select, { type ActionMeta, type SingleValue } from "react-select";

const Subscribe = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    country: null,
    referral: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Track window size for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
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

    // Build URL-encoded form body
    const payload = new URLSearchParams();
    payload.append("form-name", "subscribe-form");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    if (formData.country) payload.append("country", formData.country.value);
    if (formData.referral) payload.append("referral", formData.referral.value);

    try {
      // Submit the form to Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      // Show success message and reset form
      setSubmitted(true);
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
    <Box
      position="relative"
      minH="100vh"
      backgroundImage="url('/assets/dj-background-2.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {/* Confetti animation */}
      {submitted && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        />
      )}

      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />

      {/* Form Container */}
      <ChakraForm
        name="subscribe-form"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        maxW={{ base: "90%", md: "md" }}
        mx="auto"
        zIndex={3}
        p={8}
        bg="black"
        borderRadius="md"
        boxShadow="lg"
        data-aos="fade-up" // Minimal AOS animation applied to the entire form
        data-aos-duration="1000" // Animation duration
        data-aos-once="true" // Ensure the animation runs only once
      >
        {/* Hidden input for Netlify */}
        <input type="hidden" name="form-name" value="subscribe-form" />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <VStack gap={6}>
          <Heading as="h2" size="2xl" color="white" mb={4}>
            Get in Touch
          </Heading>

          {!submitted && (
            <>
              <Text fontSize="lg" mb={4}>
                Subscribe now to get notified about upcoming events, new music
                drops, exclusive parties, and more!
              </Text>

              {/* Name Field */}
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  borderColor="gray.600"
                  borderRadius="md"
                  _hover={{ borderColor: "#00aaff" }}
                  _focus={{
                    borderColor: "#00aaff",
                    boxShadow: "0 0 0 1px #00aaff",
                  }}
                />
                <FormErrorMessage color="#FF0000">
                  {errors.name}
                </FormErrorMessage>
              </FormControl>

              {/* Email Field */}
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Email Address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  borderColor="gray.600"
                  borderRadius="md"
                  _hover={{ borderColor: "#00aaff" }}
                  _focus={{
                    borderColor: "#00aaff",
                    boxShadow: "0 0 0 1px #00aaff",
                  }}
                />
                <FormErrorMessage color="#FF0000">
                  {errors.email}
                </FormErrorMessage>
              </FormControl>

              {/* Country Dropdown */}
              <FormControl isInvalid={!!errors.country}>
                <FormLabel>Country / Region</FormLabel>
                <Select
                  name="country"
                  options={countryOptions}
                  placeholder="Select your country"
                  value={formData.country}
                  onChange={handleDropdownChange}
                  styles={customSelectStyles}
                />
                <FormErrorMessage color="#FF0000">
                  {errors.country}
                </FormErrorMessage>
              </FormControl>

              {/* Referral Dropdown */}
              <FormControl isInvalid={!!errors.referral}>
                <FormLabel>How did you hear about me?</FormLabel>
                <Select
                  name="referral"
                  options={referralOptions}
                  placeholder="Select an option"
                  value={formData.referral}
                  onChange={handleDropdownChange}
                  styles={customSelectStyles}
                />
                <FormErrorMessage color="#FF0000">
                  {errors.referral}
                </FormErrorMessage>
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                bg="#0026b9"
                color="white"
                size="lg"
                width="full"
                _hover={{
                  bg: "#00aaff",
                  color: "#000000",
                }}
                transition="background-color 0.3s, color 0.3s"
              >
                Subscribe
              </Button>
            </>
          )}

          {submitted && (
            <>
              <Heading as="h3" size="lg" color="white">
                Thank you for subscribing!
              </Heading>
              <Text>You’ll now receive updates on all things Ivan Robles.</Text>
            </>
          )}
        </VStack>
      </ChakraForm>
    </Box>
  );
};

export default Subscribe;
