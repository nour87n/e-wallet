import React from "react";
import { Link } from "react-router-dom";
import { GiWallet } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-5 items-center md:pb-6 ">
      {/* logo */}
      <div className=" mynerve-regular flex items-center      ">
        <GiWallet className="text-4xl text-white " />
        <p className="font-bold text-[3rem] text-white">e-wallet .</p>
      </div>
      {/* list */}
      <div className="hidden md:block ">
        <ul className="flex gap-4 arsenal-regular text-[#44130b] ">
          <a className="font-bold" href="/home">
            HOME
          </a>
          <a className="font-bold" href="/home">
            EXPLORE
          </a>
          <a className="font-bold" href="/home">
            CONTACT
          </a>
        </ul>
      </div>
      {/* button */}
      <div className="flex gap-3">
        <Link to="/login">
          <button className="bg-[#7e2c1e] rounded-full px-2  hover:bg-[#ed5e46] arsenal-regular text-lg text-[#fee6e2]  ">
            Login
          </button>
        </Link>
        <Link to="/register">
        <button className=" bg-[#7e2c1e] rounded-full px-2  hover:bg-[#ed5e46] arsenal-regular text-lg text-[#fee6e2]  ">
          Register
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
