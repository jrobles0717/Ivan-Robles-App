import { Box } from "@chakra-ui/react";
import FeaturedMusic from "../components/sections/FeaturedMusic";
import Hero from "../components/sections/Hero";
import IvanRoblesShow from "../components/sections/IvanRoblesShow";
// import NewSongs from "../components/sections/newSongs";
import News from "../components/sections/News";
import PartyHighlights from "../components/sections/PartyHighlights";
import PastEvents from "../components/sections/PastEvents";
import PremiereSection from "../components/sections/PremiereSection";
import Sponsor from "../components/sections/Sponsor";
import UpcomingEvents from "../components/sections/UpcomingEvents";

const Home = () => {
  return (
    <Box>
      {/* Hero Section with Background Image */}
      <Hero />

      {/* New Songs Section */}
      {/* <NewSongs /> */}

      {/* Event Videos Section */}
      <PartyHighlights />

      {/* Past Events Videos Section */}
      <PastEvents />

      {/* Premiere Video Section */}
      <PremiereSection />

      {/* The Ivan Robles Show Section */}
      <IvanRoblesShow />

      {/* Featured Music Section */}
      <FeaturedMusic />

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* News Section */}
      <News />

      {/* Sponsor Section */}
      <Sponsor />
    </Box>
  );
};

export default Home;
