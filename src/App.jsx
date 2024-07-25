import React from "react";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Academics from "./components/Academics";
import Admission from "./components/Admission";
import Faculty from "./components/Faculty";
import Student from "./components/Student";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Home />
      <div className="container1">
        <About />
        <Academics />
        <Admission />
        <Faculty />
        <Student />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
