import { FaFacebook, FaInstagram, FaSoundcloud } from "react-icons/fa";
import { HStack, IconButton, Link } from "@chakra-ui/react";

const SocialLinks = () => {
  return (
    <HStack gap={4}>
      {" "}
      {/* Use gap instead of spacing */}
      <Link
        href="https://facebook.com/ivanrobles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="Facebook">
          <FaFacebook /> {/* Place the icon directly inside the IconButton */}
        </IconButton>
      </Link>
      <Link
        href="https://instagram.com/ivanrobles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="Instagram">
          <FaInstagram /> {/* Place the icon directly inside the IconButton */}
        </IconButton>
      </Link>
      <Link
        href="https://soundcloud.com/ivanrobles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="SoundCloud">
          <FaSoundcloud /> {/* Place the icon directly inside the IconButton */}
        </IconButton>
      </Link>
    </HStack>
  );
};

export default SocialLinks;
