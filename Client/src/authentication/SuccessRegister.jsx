import React from "react";
import PhoneHeader from "../components/PhoneHeader";
import Authentication from "../assets/Authentication.png";
import { Link } from "react-router-dom";

const SuccessRegister = () => {
  return (
    <div className="bg-[#e0e5e7]  h-screen ">
      <PhoneHeader />
      <div className=" custom-container flex flex-col">
        <div className="flex justify-center">
          <img src={Authentication} className=" w-[80%] " />
        </div>
        <Link to="/login">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-[#004b95] text-2xl font-bold">
              Your account is verified succefully{" "}
            </h1>
            <button className=" w-1/2 p-1 rounded-xl bg-[#5d439e] hover:bg-[#9762c9] text-white ">
              LOG IN
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SuccessRegister;
