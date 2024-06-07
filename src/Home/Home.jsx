import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Supported from "../components/Supported";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#5d439e] h-screen">
      <div className="custom-container">
        <Navbar />
      </div>
      <Hero />
      <div className=" custom-container">
        <Supported />
      </div>
      <Aboutus />

      <Footer />
    </div>
  );
};

export default Home;
