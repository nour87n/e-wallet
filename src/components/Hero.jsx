import React from "react";
import wallet from "../assets/wallet.png";
import { BsStars } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-white pb-4   ">
      <div className=" custom-container flex ">
        {/* text */}
        <div className="arsenal-regular pt-[8rem] flex flex-col gap-4 text-[#44130b]   ">
          <button className="rounded-full bg-[#fdd2cb] text-2xl font-semibold bg-opacity-50 text-nowrap px-3 flex items-center gap-1">
            <BsStars className="text-md text-[#44130b]" />
            Welcome to a Modern Financial Experience
          </button>
          <p className=" text-4xl font-bold ">
            Managing Your Personal Finances Made Easier
          </p>
          <p className="text-xl text-wrap ">
            Elevate your financial experience with e-wallet. We simplify how you
            pay, transfer money, and manage your finances, giving you full
            control over your money.
          </p>
          
          {/* app */}
          
            <div className="flex gap-2 items-center  ">
              <button>
                <IoLogoGooglePlaystore className="text-[4rem]" />
              </button>
              <button>
                <FaAppStore className="text-[4rem]" />
              </button>
            </div>
          
        </div>
        {/* photo */}
        <div className="w-[120rem]   ">
          <img src={wallet} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
