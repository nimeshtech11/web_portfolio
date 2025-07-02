import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home"; // ✅ new page
import Contact from "./section/Contact";
import ScrollToHash from "./components/ScrollToHash";
import MyProject from "./section/MyProject";

const App = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<MyProject />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
