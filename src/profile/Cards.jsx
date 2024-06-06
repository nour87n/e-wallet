import React from "react";
import PhoneFooter from "../components/PhoneFooter";
import PhoneHeader from "../components/PhoneHeader";

const Cards = () => {
  return (
    <div className=" ">
      <PhoneHeader />
      <div className=" custom-container flex flex-col">
        {/* text */}
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-3xl">My Cards :</h1>
          <button className="text-[#1D62CA] font-bold">add card +</button>
        </div>
      </div>
      {/* cards */}
      <div className="pb-5 flex flex-col">
        <div className="mt-4 h-[11rem] rounded-xl mx-4  bg-gradient-to-t from-[#6F45E9] to-purple-950  flex flex-col justify-between text-white"></div>
        <div className="mt-4 h-[11rem] rounded-xl mx-4  bg-gradient-to-t from-[#6F45E9] to-purple-950  flex flex-col justify-between text-white"></div>
        <div className="mt-4 h-[11rem] rounded-xl mx-4  bg-gradient-to-t from-[#6F45E9] to-purple-950  flex flex-col justify-between text-white"></div>
      </div>
      
      <PhoneFooter />
    </div>
  );
};

export default Cards;
