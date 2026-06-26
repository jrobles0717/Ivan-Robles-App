import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";

import { ChakraRouterLink } from "../components/common/ChakraRouterLink";
import { HiOutlineBell } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const NAVBAR_HEIGHT = {
  base: "76px",
  md: "84px",
};

type MenuToggleButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const MenuToggleButton = ({ isOpen, onToggle }: MenuToggleButtonProps) => {
  return (
    <chakra.button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onToggle}
      display={{ base: "flex", md: "none" }}
      alignItems="center"
      justifyContent="center"
      position="relative"
      w="48px"
      h="48px"
      minW="48px"
      p={0}
      borderRadius="full"
      border="1px solid"
      borderColor={isOpen ? "rgba(102,217,255,0.24)" : "rgba(255,255,255,0.10)"}
      bg={isOpen ? "rgba(0,170,255,0.10)" : "rgba(255,255,255,0.05)"}
      backdropFilter="blur(14px)"
      boxShadow={
        isOpen
          ? "0 0 0 1px rgba(102,217,255,0.08), 0 14px 32px rgba(0,170,255,0.18)"
          : "0 8px 18px rgba(0,0,0,0.16)"
      }
      transition="all 0.32s cubic-bezier(0.22, 1, 0.36, 1)"
      _hover={{
        bg: isOpen ? "rgba(0,170,255,0.14)" : "rgba(255,255,255,0.08)",
        borderColor: "rgba(102,217,255,0.22)",
        transform: "translateY(-1px) scale(1.01)",
      }}
      _active={{
        transform: "scale(0.97)",
      }}
      _focus={{
        outline: "none",
        boxShadow:
          "0 0 0 1px rgba(102,217,255,0.12), 0 0 0 4px rgba(0,170,255,0.10)",
      }}
    >
      {/* Ambient outer glow */}
      <Box
        position="absolute"
        inset="-4px"
        borderRadius="full"
        bg="rgba(0,170,255,0.12)"
        filter="blur(16px)"
        opacity={isOpen ? 1 : 0}
        transform={isOpen ? "scale(1)" : "scale(0.82)"}
        transition="all 0.32s cubic-bezier(0.22, 1, 0.36, 1)"
        pointerEvents="none"
      />

      {/* Soft inner glass ring */}
      <Box
        position="absolute"
        inset="6px"
        borderRadius="full"
        border="1px solid"
        borderColor={
          isOpen ? "rgba(102,217,255,0.18)" : "rgba(255,255,255,0.06)"
        }
        bg={isOpen ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.015)"}
        transition="all 0.32s ease"
        pointerEvents="none"
      />

      {/* Center icon wrapper */}
      <Box
        position="relative"
        w="22px"
        h="22px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="relative"
          w="20px"
          h="16px"
          transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
          transition="transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)"
        >
          {/* Top line */}
          <Box
            position="absolute"
            top="1px"
            left="0"
            w="20px"
            h="2px"
            borderRadius="full"
            bg="white"
            boxShadow={
              isOpen
                ? "0 0 10px rgba(255,255,255,0.10)"
                : "0 0 0 rgba(255,255,255,0)"
            }
            transform={
              isOpen
                ? "translateY(6px) rotate(45deg) scaleX(1.02)"
                : "translateY(0px) rotate(0deg) scaleX(1)"
            }
            transformOrigin="center"
            transition="transform 0.36s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.28s ease"
          />

          {/* Middle line */}
          <Box
            position="absolute"
            top="7px"
            left="3px"
            w="14px"
            h="2px"
            borderRadius="full"
            bg="#66d9ff"
            boxShadow="0 0 10px rgba(102,217,255,0.42)"
            opacity={isOpen ? 0 : 1}
            transform={
              isOpen
                ? "scaleX(0.15) translateX(8px)"
                : "scaleX(1) translateX(0px)"
            }
            transformOrigin="center"
            transition="all 0.24s ease"
          />

          {/* Bottom line */}
          <Box
            position="absolute"
            top="13px"
            left="0"
            w="20px"
            h="2px"
            borderRadius="full"
            bg="white"
            boxShadow={
              isOpen
                ? "0 0 10px rgba(255,255,255,0.10)"
                : "0 0 0 rgba(255,255,255,0)"
            }
            transform={
              isOpen
                ? "translateY(-6px) rotate(-45deg) scaleX(1.02)"
                : "translateY(0px) rotate(0deg) scaleX(1)"
            }
            transformOrigin="center"
            transition="transform 0.36s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.28s ease"
          />

          {/* Small center energy pulse */}
          <Box
            position="absolute"
            top="6px"
            left="8px"
            w={isOpen ? "4px" : "0px"}
            h={isOpen ? "4px" : "0px"}
            borderRadius="full"
            bg="#66d9ff"
            boxShadow="0 0 12px rgba(102,217,255,0.60)"
            opacity={isOpen ? 1 : 0}
            transition="all 0.24s ease"
          />
        </Box>
      </Box>
    </chakra.button>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const showGlassNavbar = !isHome || isScrolled || isOpen;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "About Me", to: "/about" },
    ],
    []
  );

  const isActiveLink = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex="1200"
        px={{ base: 3, md: 5, xl: 6 }}
        pt={{ base: 3, md: 4 }}
        transition="all 0.3s ease"
      >
        <Box
          maxW="1380px"
          mx="auto"
          borderRadius={{ base: "20px", md: "24px" }}
          bg={
            showGlassNavbar ? "rgba(8, 14, 24, 0.82)" : "rgba(8, 14, 24, 0.08)"
          }
          border="1px solid"
          borderColor={
            showGlassNavbar
              ? "rgba(102, 217, 255, 0.16)"
              : "rgba(255, 255, 255, 0.08)"
          }
          backdropFilter={showGlassNavbar ? "blur(16px)" : "blur(6px)"}
          boxShadow={
            showGlassNavbar ? "0 14px 40px rgba(0, 0, 0, 0.28)" : "none"
          }
          transition="all 0.3s ease"
          overflow="hidden"
        >
          <Flex
            align="center"
            justify="space-between"
            minH={NAVBAR_HEIGHT}
            px={{ base: 4, md: 6 }}
          >
            {/* Logo */}
            <ChakraRouterLink
              to="/"
              display="flex"
              alignItems="center"
              gap={3}
              _hover={{ textDecoration: "none", opacity: 0.96 }}
              _focus={{ outline: "none" }}
            >
              <Box position="relative">
                <Box
                  position="absolute"
                  inset="-6px"
                  borderRadius="full"
                  bg="rgba(0, 170, 255, 0.16)"
                  filter="blur(12px)"
                />
                <Image
                  src="/assets/irob-logo.png"
                  alt="Ivan Robles Logo"
                  boxSize={{ base: "42px", md: "48px" }}
                  objectFit="contain"
                  position="relative"
                  zIndex={1}
                />
              </Box>

              <Box display={{ base: "none", sm: "block" }}>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "md", md: "lg" }}
                  color="white"
                  lineHeight="1"
                >
                  Ivan Robles
                </Text>
                <Text
                  fontSize="xs"
                  color="#66d9ff"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  mt={1}
                >
                  House Music DJ & Producer
                </Text>
              </Box>
            </ChakraRouterLink>

            {/* Desktop Navigation */}
            <HStack gap={3} display={{ base: "none", md: "flex" }}>
              {navLinks.map((link) => {
                const active = isActiveLink(link.to);

                return (
                  <ChakraRouterLink
                    key={link.to}
                    to={link.to}
                    px={4}
                    py={2.5}
                    borderRadius="full"
                    color={active ? "white" : "gray.200"}
                    bg={active ? "rgba(0, 170, 255, 0.16)" : "transparent"}
                    border="1px solid"
                    borderColor={
                      active
                        ? "rgba(102, 217, 255, 0.26)"
                        : "rgba(255, 255, 255, 0.05)"
                    }
                    _hover={{
                      textDecoration: "none",
                      color: "white",
                      bg: "rgba(255, 255, 255, 0.06)",
                      borderColor: "rgba(102, 217, 255, 0.16)",
                    }}
                    _focus={{ outline: "none" }}
                    transition="all 0.25s ease"
                  >
                    {link.label}
                  </ChakraRouterLink>
                );
              })}

              <ChakraRouterLink
                to="/subscribe"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
              >
                <Button
                  size="md"
                  px={6}
                  borderRadius="full"
                  bg="#00aaff"
                  color="white"
                  gap={2}
                  boxShadow="0 10px 24px rgba(0, 170, 255, 0.28)"
                  _hover={{
                    bg: "#008ecc",
                    transform: "translateY(-2px)",
                    boxShadow: "0 14px 30px rgba(0, 170, 255, 0.34)",
                  }}
                  transition="all 0.3s ease"
                >
                  <HiOutlineBell />
                  Subscribe
                </Button>
              </ChakraRouterLink>
            </HStack>

            {/* Mobile Menu Toggle */}
            <MenuToggleButton
              isOpen={isOpen}
              onToggle={() => setOpen((prev) => !prev)}
            />
          </Flex>

          {/* Mobile Menu */}
          <Box
            maxH={isOpen ? "420px" : "0px"}
            opacity={isOpen ? 1 : 0}
            overflow="hidden"
            transition="all 0.3s ease"
            display={{ base: "block", md: "none" }}
            borderTop={isOpen ? "1px solid rgba(255,255,255,0.08)" : "none"}
          >
            <Box px={4} pb={4} pt={4}>
              <Stack gap={3}>
                {navLinks.map((link) => {
                  const active = isActiveLink(link.to);

                  return (
                    <ChakraRouterLink
                      key={link.to}
                      to={link.to}
                      display="block"
                      px={4}
                      py={3}
                      borderRadius="16px"
                      color={active ? "white" : "gray.200"}
                      bg={
                        active
                          ? "rgba(0, 170, 255, 0.16)"
                          : "rgba(255,255,255,0.03)"
                      }
                      border="1px solid"
                      borderColor={
                        active
                          ? "rgba(102, 217, 255, 0.24)"
                          : "rgba(255,255,255,0.06)"
                      }
                      _hover={{
                        textDecoration: "none",
                        color: "white",
                        bg: "rgba(255,255,255,0.06)",
                      }}
                      _focus={{ outline: "none" }}
                      transition="all 0.25s ease"
                    >
                      {link.label}
                    </ChakraRouterLink>
                  );
                })}

                <ChakraRouterLink
                  to="/subscribe"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                >
                  <Button
                    w="full"
                    size="lg"
                    borderRadius="16px"
                    bg="#00aaff"
                    color="white"
                    gap={2}
                    boxShadow="0 10px 24px rgba(0, 170, 255, 0.28)"
                    _hover={{
                      bg: "#008ecc",
                    }}
                  >
                    <HiOutlineBell />
                    Subscribe
                  </Button>
                </ChakraRouterLink>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      {!isHome && <Box h={{ base: "92px", md: "104px" }} />}
    </>
  );
};

export default Navbar;
