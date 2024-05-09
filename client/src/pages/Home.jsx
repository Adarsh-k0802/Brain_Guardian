import React from "react";
import Contact from "../components/Contact";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import Info from "../components/Info";
import Dr from "../components/Dr";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info/>
      <HomeCircles />
      <Dr/>
      <About/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
