import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="bg-[#fbb2a6] h-screen">
      <div  className="custom-container">
      <Navbar />
      </div>
      <Hero/>
    </div>
  );
};

export default Home;
