import { Center, Spinner } from "@chakra-ui/react";

import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  children: ReactNode;
}

// Defers mounting a section's content (and its heavy styles/images/videos)
// until it's about to enter the viewport, instead of all sections mounting
// at once on initial load — that upfront work is what freezes low-end
// mobile devices right after a refresh.
const LazySection = ({ children }: LazySectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "600px 0px",
  });

  return (
    <div ref={ref}>
      {inView ? (
        children
      ) : (
        <Center py={20}>
          <Spinner color="#00aaff" size="lg" />
        </Center>
      )}
    </div>
  );
};

export default LazySection;
