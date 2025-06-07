import { Link as ReactRouterLink } from "react-router-dom";
// src/components/common/ChakraRouterLink.tsx
import { chakra } from "@chakra-ui/react";

// Wrap react-router’s Link so Chakra “as” works and TS sees the `to` prop
export const ChakraRouterLink = chakra(ReactRouterLink);
