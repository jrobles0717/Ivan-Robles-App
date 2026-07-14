import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import IntroVideo from "./components/IntroVideo";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";
import Subscribe from "./pages/Subscribe";
import { Suspense, lazy, useState } from "react";

const AOSInitializer = lazy(() => import("./components/AOSInitializer"));

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("intro-seen");
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
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
