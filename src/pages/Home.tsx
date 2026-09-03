import { Box, Spinner, Center } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import Hero from "../components/sections/Hero";
import LazySection from "../components/common/LazySection";
import Seo from "../components/common/Seo";

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
      <Seo
        title="Iván Robles | House Music DJ & Producer"
        description="Iván Robles — House Music DJ & Producer from Puerto Rico. Events, mixes, and more."
        path="/"
      />
      <Hero />

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <PartyHighlights />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <PastEvents />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <PremiereSection />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <IvanRoblesShow />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <FeaturedMusic />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <UpcomingEvents />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <News />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<SectionFallback />}>
          <Sponsor />
        </Suspense>
      </LazySection>
    </Box>
  );
};

export default Home;
