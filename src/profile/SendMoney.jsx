import React from "react";
import PhoneHeader from "../components/PhoneHeader";
import { IoIosArrowBack } from "react-icons/io";
import girlprofilepic from "../assets/girlprofilepic.png";
import { Link } from "react-router-dom";
import PhoneFooter from "../components/PhoneFooter";
import machine from "../assets/machine.png";

const SendMoney = () => {
  return (
    <div className="bg-[#e0e5e7] h-screen">
      <PhoneHeader />
      <div className=" custom-container md:flex-row flex flex-col">
        <div className="hidden md:flex md:mt-14 ">
          <img className="" src={machine} />
        </div>
        <Link to="/main-profile">
          <div className="text-[#004b95] md:flex-row md:text-nowrap flex font-bold items-center">
            <IoIosArrowBack className="font-bold text-2xl mt-2" />
            <p>go back to home page</p>
          </div>
        </Link>
        <div className="mt-4 flex flex-col items-center gap-2 md:mt-14  ">
          <p className="text-2xl font-bold ">Transfer to :</p>
          <img className="bg-white rounded-full w-[30%]" src={girlprofilepic} />
          <input
            placeholder="enter your contact phone number"
            className="rounded-xl text-center bg-[#658798] bg-opacity-40  text-sm w-[18rem] p-3 font-bold  placeholder:text-[#004b95] placeholder:text-opacity-55  "
          />
          <p className=" opacity-50 text-2xl">ENTER AMMOUNT </p>
          <input
            placeholder="000 000$"
            className="  bg-opacity-55 text-3xl text-center py-3 rounded-xl w-[13rem]"
          />
          <button className=" text-[#fef6ee] mt-5 w-[12rem] rounded-md p-2  bg-[#5d439e] hover:bg-[#9762c9]  ">
            Confirm
          </button>
        </div>
      </div>
      <div className="mt-4">
        <PhoneFooter />
      </div>
    </div>
  );
};

export default SendMoney;
