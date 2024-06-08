import React from "react";
import machine from "../assets/machine.png";
import { BsStars } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-white pb-4   ">
      <div className=" custom-container md:flex  items-center  ">
        {/* text */}
        <div className="arsenal-regular md:pt-[8rem] pt-6 md:flex md:flex-col gap-4 text-[#44130b]   ">
          <button className="rounded-full bg-[#b7cdd8] md:text-2xl font-semibold bg-opacity-50 text-lg text-[#004b95]  text-nowrap px-3 flex items-center gap-1">
            <BsStars className=" text-md text-[#004b95]" />
            Welcome to a Modern Financial Experience
          </button>
          <p className=" text-4xl font-bold text-[#004b95] ">
            Managing Your Personal Finances Made Easier
          </p>
          <p className="text-xl   text-wrap text-[#566167] ">
            Elevate your financial experience with e-wallet. We simplify how you
            pay, transfer money, and manage your finances, giving you full
            control over your money.
          </p>
          
          {/* app */}
          
            <div className=" gap-2 items-center hidden md:block  ">
              <button>
                <IoLogoGooglePlaystore className="text-[4rem] text-[#566167]" />
              </button>
              <button>
                <FaAppStore className="text-[4rem] text-[#566167]" />
              </button>
            </div>
          
        </div>
        {/* photo */}
        <div className="md:w-[120rem]   ">
          <img src={machine} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
