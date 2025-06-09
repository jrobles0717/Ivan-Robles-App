import ChakraAnchor from "./common/ChakraAnchor";
import { Icon } from "@chakra-ui/react";

// Social Link Component with hover animation
const SocialLink = ({
  icon,
  href,
  label,
}: {
  icon: any;
  href: string;
  label: string;
}) => {
  return (
    <ChakraAnchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      fontSize="2xl"
      color="white"
      _hover={{
        color: "#00aaff", // Branding light blue
        transform: "scale(1.2)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Icon as={icon} />
    </ChakraAnchor>
  );
};

export default SocialLink;
