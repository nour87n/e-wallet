import React from "react";
import { GiWallet } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import register from "../assets/register.png";
const Register = () => {
  return (
    <div className="bg-[#fef6ee] h-screen text-[#44130b] ">
      <div className=" custom-container md:flex md:w-4/5">
        <div className="hidden md:flex">
          <img className="md:w-[35rem] md:h-[35rem]" src={register} />
        </div>
        <div className="flex flex-col pt-10">
          {/* logo */}
          <div className=" flex gap-2 items-center justify-center text-[#44130b] mynerve-regular">
            <GiWallet className="text-4xl text-[#44130b]" />
            <p className=" font-bold text-4xl">e-wallet .</p>
          </div>
          {/* inputs */}
          <div className="flex flex-col arsenal-regular justify-center items-center pt-7  ">
            <p className="font-bold text-4xl ">Create Account :</p>
            {/* name */}
            <h1 className="font-bold text-2xl pr-[15.5rem]">Name:</h1>
            <input
              placeholder="type your full name"
              className="rounded-md pl-4 bg-[#b83916] bg-opacity-40 py-2 text-xl w-[20rem] placeholder:text-[#44130b] placeholder:text-opacity-55 "
            />
            {/* email */}
            <h1 className="font-bold text-2xl pr-[15.5rem]">Email:</h1>
            <input
              placeholder="type your email adress"
              className="rounded-md pl-4 bg-[#b83916] bg-opacity-40 py-2 text-xl w-[20rem] placeholder:text-[#44130b] placeholder:text-opacity-55  "
            />
            {/* password */}
            <h1 className="font-bold text-2xl pr-[13rem]">Password:</h1>
            <input
              type="password"
              placeholder="type your password"
              className="rounded-md pl-4 bg-[#b83916] bg-opacity-40 py-2 text-xl w-[20rem] placeholder:text-[#44130b] placeholder:text-opacity-55  "
            />
          </div>
          {/* button */}
          <div className="pt-5 flex items-center justify-center">
            <button className=" text-[#fef6ee] w-[20rem] rounded-md p-2 bg-[#44130b]  ">
              Create new account
            </button>
          </div>
          {/* continue with */}
          <div className="pt-4 flex flex-col   justify-center">
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

export default Register;
