import { Box } from "@chakra-ui/react";
import FeaturedMusic from "../components/sections/FeaturedMusic";
import Hero from "../components/sections/Hero";
import IvanRoblesShow from "../components/sections/IvanRoblesShow";
import PartyHighlights from "../components/sections/PartyHighlights";
import PremiereSection from "../components/sections/PremiereSection";
import Sponsor from "../components/sections/Sponsor";
import UpcomingEvents from "../components/sections/UpcomingEvents";

const Home = () => {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Hero />

      {/* Event Videos Section */}
      <PartyHighlights />

      {/* Premiere Video Section */}
      <PremiereSection />

      {/* The Ivan Robles Show Section */}
      <IvanRoblesShow />

      {/* Featured Music Section */}
      <FeaturedMusic />

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Sponsor Section */}
      <Sponsor />
    </Box>
  );
};

export default Home;
