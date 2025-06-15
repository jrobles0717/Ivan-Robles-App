import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if the page is being navigated to (not refreshed)
    if (window.history.state) {
      // Scroll to the top only when the route changes
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
