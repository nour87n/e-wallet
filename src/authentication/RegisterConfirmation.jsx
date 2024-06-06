import React from "react";
import { GiWallet } from "react-icons/gi";
import login from "../assets/login.png";
import PhoneFooter from "../components/PhoneFooter";
const RegisterConfirmation = () => {
  return (
    <div className="bg-[#fef6ee] pt-[7rem] h-screen text-[#44130b]">
      <div className=" custom-container">
        <div className="flex flex-col">
          {/* logo */}
          <div className=" flex gap-2 items-center justify-center text-[#44130b] mynerve-regular pt-5">
            <GiWallet className="text-4xl text-[#44130b]" />
            <p className=" font-bold text-4xl">e-wallet .</p>
          </div>
          {/* input */}
          <p className="font-bold mt-7 text-xl text-center">
            An SMS is sent to your phone number{" "}
          </p>
          <p className=" mt-6 text-lg font-semibold text-center opacity-50">
            Enter six-digits code
          </p>
          <div className="flex justify-center ">
            <input
              placeholder="XXX-XXX"
              maxLength={6}
              className=" bg-[#b83916] p-2 bg-opacity-45 text-xl font-bold rounded-lg w-[17rem] text-center"
            />
          </div>
          <div className="pt-6 flex justify-center">
            <button className=" text-[#fef6ee] w-[17rem] rounded-md p-2  bg-[#44130b]  ">
              Confirm
            </button>
          </div>
        </div>
      </div>
          <PhoneFooter/>
    </div>
  );
};

export default RegisterConfirmation;
