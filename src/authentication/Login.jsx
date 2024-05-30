import React from "react";
import login from "../assets/login.png";
import { FaApple } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GiWallet } from "react-icons/gi";

const Login = () => {
  return (
    <div className="bg-[#fef6ee] h-full   md:h-screen  ">
      <div className="flex flex-col md:flex-row   arsenal-regular   ">
        {/* img */}
        <div className="w-full  ">
          <img className="h-[400px]" src={login} />
        </div>
        {/* input */}
        <div className="md:bg-white md:flex-col md:pb-[4.7rem]   ">
          <div className="hidden md:justify-center md:pb-[5rem] md:pt-[5rem] md:flex md:items-center   text-[#44130b] mynerve-regular">
            <GiWallet className="text-4xl text-[#44130b]" />
            <p className=" font-bold text-4xl">e-wallet .</p>
          </div>
          <div className="flex flex-col py-3  px-7  bg-white md:bg-white ">
            <p className="font-bold text-3xl text-[#44130b] pb-3">
              Enter your mobile number :
            </p>

            <div className="flex items-center ">
              <MdOutlinePhoneAndroid className="text-[#932f19] text-4xl" />
              <input
                placeholder="type your Phone number"
                className="rounded-full pl-4  bg-[#932f19] bg-opacity-55 placeholder:text-[#932f19] w-[15rem] py-2 "
              ></input>
            </div>
          </div>
          {/* button */}
          <div className="flex justify-center pt-3 bg-white md:bg-white  pb-3">
            <button className="  bg-[#932f19] rounded-xl hover:bg-[#de4d18] text-white p-2 w-[25rem] ">
              Continue
            </button>
          </div>
          {/* continue with */}
          <div className=" bg-white md:bg-white  flex flex-col   justify-center">
            <p className="border-b-[0.5rem] text-[#44130b] font-bold border-[#932f19] text-center ">
              Or Continue With :
            </p>
            <div className="flex justify-center gap-10 px-7 py-3">
              <button className="bg-[#fef6ee] px-7  border-[#932f19] border-[0.1rem]">
                <FaApple className="text-[#932f19] text-5xl " />
              </button>

              <button className="bg-[#fef6ee]  px-7  border-[#932f19] border-[0.1rem]">
                <PiFacebookLogoBold className="text-[#932f19] text-5xl" />
              </button>

              <button className="bg-[#fef6ee]  px-7  border-[#932f19] border-[0.1rem] ">
                <CgMail className="text-[#932f19] text-5xl " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
