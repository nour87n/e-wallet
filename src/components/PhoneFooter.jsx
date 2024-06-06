import React from "react";
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const PhoneFooter = () => {
  return (
    <div>
      <div className="flex items-center gap-[4rem] px-4 bg-opacity-45 ml-6 ">
        <Link to="/main-profile">
          <button className="  w-[5rem]  p-2 ">
            <FaHome className="text-[#191919] text-3xl hover:scale-150 " />
          </button>
        </Link>
        <Link to="/profile">
          <button className="">
            <ImProfile className="text-[#191919]   text-2xl hover:scale-150 " />
          </button>
        </Link>
        <Link to="/cards">
          <button>
            <FaRegCreditCard className="text-[#191919]  text-3xl hover:scale-150" />
          </button>
        </Link>
        <Link to="/setting">
          <button>
            <IoMenu className="text-[#191919]  text-3xl hover:scale-150" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhoneFooter;
