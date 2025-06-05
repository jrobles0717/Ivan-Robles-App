import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import React, { useEffect, useState } from "react";
import {
  countryOptions,
  customSelectStyles,
  referralOptions,
} from "../util/helper";

import Confetti from "react-confetti";
import Select from "react-select";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: null,
    referral: "",
  });
  const [errors, setErrors] = useState({});
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (selectedOption, action) => {
    setFormData((prev) => ({ ...prev, [action.name]: selectedOption }));
  };

  const validate = () => {
    const newErrors = {};
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        country: null,
        referral: "",
      });
      setErrors({});
    }
  };

  return (
    <Box
      position="relative"
      minH="100vh"
      backgroundImage="url('src/assets/dj-background-2.png')"
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
      <VStack
        as="form"
        onSubmit={handleSubmit}
        maxW={{ base: "90%", md: "md" }}
        mx="auto"
        zIndex={3}
        p={8}
        bg="black"
        borderRadius="md"
        boxShadow="lg"
        gap={6}
      >
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
            <FormControl isInvalid={errors.name}>
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
              <FormErrorMessage color="#FF0000">{errors.name}</FormErrorMessage>
            </FormControl>

            {/* Email Field */}
            <FormControl isInvalid={errors.email}>
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
            <FormControl isInvalid={errors.country}>
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
            <FormControl isInvalid={errors.referral}>
              <FormLabel>How did you hear about us?</FormLabel>
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
                bg: "#00aaff", // light blue background
                color: "#000000", // pure black text for max contrast
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
    </Box>
  );
};

export default Subscribe;
