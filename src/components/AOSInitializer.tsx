import "aos/dist/aos.css"; // Import AOS styles

import AOS from "aos";
import { useEffect } from "react";

const AOSInitializer = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth easing
      once: true, // Animate only once
      offset: 120, // Offset from the trigger point
    });

    // Refresh AOS to ensure animations are recalculated
    AOS.refresh();
  }, []);

  return null; // This component doesn't render anything
};

export default AOSInitializer;
