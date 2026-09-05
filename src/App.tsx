import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./context/CartContext";
import CartToast from "./components/CartToast";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IntroVideo from "./components/IntroVideo";
import MobileCartBar from "./components/MobileCartBar";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";
import Shop from "./pages/Shop";
import Subscribe from "./pages/Subscribe";
import { Suspense, lazy, useState } from "react";

const AOSInitializer = lazy(() => import("./components/AOSInitializer"));

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    // Skip the intro on mobile — it delays first paint too much on
    // slow connections. Desktop keeps the full intro experience.
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      window.screen.width;
    const isMobile = width > 0 && width < 768;
    return !isMobile && !sessionStorage.getItem("intro-seen");
  });

  const handleVideoEnd = () => {
    sessionStorage.setItem("intro-seen", "1");
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <IntroVideo
        videoSrc="/assets/IROB-Intro.mp4"
        onVideoEnd={handleVideoEnd}
      />
    );
  }

  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Suspense fallback={null}>
          <AOSInitializer />
        </Suspense>
        <div className="app-shell">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/subscribe" element={<Subscribe />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <MobileCartBar />
        <CartToast />
        <CartDrawer />
      </CartProvider>
    </Router>
  );
};

export default App;
