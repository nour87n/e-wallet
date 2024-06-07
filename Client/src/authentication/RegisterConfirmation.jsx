import React from "react";
import { GiWallet } from "react-icons/gi";
import login from "../assets/login.png";
import PhoneFooter from "../components/PhoneFooter";
import PhoneHeader from "../components/PhoneHeader";
const RegisterConfirmation = () => {
  return (
    <div className="bg-[#e0e5e7]  h-screen text-[#004b95]">
      <PhoneHeader/>
      <div className=" custom-container pt-14">
        <div className="flex flex-col">
          {/* logo */}
          <div className=" flex gap-2 items-center justify-center text-[#4f5d64] mynerve-regular pt-5">
            <GiWallet className="text-4xl text-[#4f5d64]" />
            <p className=" font-bold text-4xl">e-wallet .</p>
          </div>
          {/* input */}
          <p className="font-bold mt-7 text-xl text-[#004b95] text-center">
            A confirmation code is sent to your email{" "}
          </p>
          <p className=" mt-6 text-lg font-semibold text-[#004b95] text-center opacity-50">
            Enter six-digits code
          </p>
          <div className="flex justify-center ">
            <input
              placeholder="XXX-XXX"
              maxLength={6}
              className=" bg-[#b7cdd8] p-2 bg-opacity-45 text-xl font-bold rounded-lg w-[17rem] text-center"
            />
          </div>
          <div className="pt-6 flex justify-center">
            <button className=" text-[#fef6ee] w-[17rem] rounded-md p-2  bg-[#5d439e] hover:bg-[#9762c9]  ">
              Confirm
            </button>
          </div>
        </div>
      </div>
          
    </div>
  );
};

export default RegisterConfirmation;
