import React from "react";
import { GiWallet } from "react-icons/gi";

const Footer = () => {
  return (
    <div className=" bg-[#fbb2a6] py-10">
      <div className=" custom-container">
        <div className=" arsenal-regular flex flex-col">
          <div className="md:flex flex flex-col items-center text-center justify-between md:flex-row  ">
            {/* logo */}
            <div className="flex mynerve-regular items-center gap-1 ">
              <GiWallet className="text-4xl text-[#44130b]" />
              <p className="font-bold text-[3rem] text-[#44130b]">e-wallet</p>
            </div>

            {/* app description */}
            <p className="text-wrap w-[25rem] text-md">
              e-wallet is an app that allows you to store money, make payments, and
              perform other financial transactions electronically through your
              mobile device.
            </p>
          </div>
          <div className="bg-[#44130b] h-[0.1rem] mt-4 "></div>
          <p className="flex pt-3 justify-center font-bold">Copyright 2024 e-wallet | All rights reserved</p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
