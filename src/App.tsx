import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AOSInitializer from "./components/AOSInitializer";
import About from "./pages/About";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";
import Subscribe from "./pages/Subscribe";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AOSInitializer />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <main style={{ flex: "1", display: "flex", flexDirection: "column" }}>
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
