import React from "react";
import PhoneHeader from "../../components/PhoneHeader";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import error from "../../assets/error.png";
const Failed = () => {
  return (
    <div className="bg-[#e0e5e7] h-full pb-2">
      <PhoneHeader />
      <div className="felx flex-col">
        <Link to="/main-profile">
          <div className="text-[#004b95] flex font-bold items-center">
            <IoIosArrowBack className="font-bold text-2xl mt-2" />
            <p>go back</p>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <img className="w-[80%]" src={error} />
          <p className="text-3xl text-[#004b95] font-bold ">Transfer Failed </p>
          <p className="w-[15rem] text-center text-[#004b95] font-bold opacity-55">Your transfer has been declined due to a technical issue</p>
        </div>
      </div>
    </div>
  );
};

export default Failed;
