import { Box, Spinner, Center } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import Hero from "../components/sections/Hero";

const PartyHighlights = lazy(() => import("../components/sections/PartyHighlights"));
const PastEvents = lazy(() => import("../components/sections/PastEvents"));
const PremiereSection = lazy(() => import("../components/sections/PremiereSection"));
const IvanRoblesShow = lazy(() => import("../components/sections/IvanRoblesShow"));
const FeaturedMusic = lazy(() => import("../components/sections/FeaturedMusic"));
const UpcomingEvents = lazy(() => import("../components/sections/UpcomingEvents"));
const News = lazy(() => import("../components/sections/News"));
const Sponsor = lazy(() => import("../components/sections/Sponsor"));

const SectionFallback = () => (
  <Center py={20}>
    <Spinner color="#00aaff" size="lg" />
  </Center>
);

const Home = () => {
  return (
    <Box>
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <PartyHighlights />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PastEvents />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PremiereSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <IvanRoblesShow />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FeaturedMusic />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <UpcomingEvents />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <News />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Sponsor />
      </Suspense>
    </Box>
  );
};

export default Home;
