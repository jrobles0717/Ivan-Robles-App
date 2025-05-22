import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <main style={{ flex: "1", display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
