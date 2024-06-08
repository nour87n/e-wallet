import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { AiOutlineLock } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

import PhoneFooter from "../../components/PhoneFooter";
import PhoneHeader from "../../components/PhoneHeader";
import { useAuthContext } from "../../hooks/useAuthContext";
const UserSetting = () => {
  const { state } = useAuthContext();
  const { user } = state;
  console.log("state from user setting", state);
  return (
    <div className="">
      <PhoneHeader />
      <div className=" custom-container">
        <div className="md:border border-solid">
          {/* navbar */}
          <div className="flex  items-center ">
            <Link to="/main-profile">
              <div className=" flex text-[#1D62CA] items-center ">
                <IoMdArrowRoundBack className="font-bold text-xl" />
                <p className="font-bold">BACK</p>
              </div>
            </Link>

            <p className="font-bold text-xl pl-[5rem] md:ml-[16rem] ">
              Profile Settings
            </p>
          </div>
          {/* profile pic */}
          <div className="flex flex-col items-center mt-20">
            <div className="bg-red-700 rounded-full w-[5rem] h-[5rem] text-center flex justify-center items-center">
              profile
            </div>
            <p className="font-bold text-lg">{user.fullName}</p>
            <p className=" opacity-50">joinded 2 years ago</p>
          </div>

          {/* information */}
          <div className="flex flex-col md:ml-[21rem] md:w-[19rem] md:pt-10">
            {/* name */}
            <div className="flex items-center gap-2 border-b pb-2">
              <button className=" bg-[#E6DDFF] rounded-xl p-1">
                <IoMdPerson className="text-[#270685] text-4xl" />
              </button>
              <div className="flex flex-col">
                <span>Full name</span>
                <input placeholder={user.fullName} className="font-bold " />
              </div>
              <CiEdit className="text-[#1D62CA] text-2xl ml-32" />
            </div>

            {/* phone number */}
            <div className="flex items-center gap-2 border-b pb-2">
              <button className=" bg-[#C9EBE5] rounded-xl p-1">
                <MdOutlinePhoneInTalk className="text-[#2A907E] text-4xl" />
              </button>
              <div className="flex flex-col">
                <span>Phone number</span>
                <input placeholder={user.phoneNumber} className="font-bold " />
              </div>
              <CiEdit className="text-[#1D62CA] text-2xl ml-32" />
            </div>

            {/* email */}
            <div className="flex items-center gap-2 border-b pb-2">
              <button className=" bg-[#C9EBE5] rounded-xl p-1">
                <IoMdMailOpen className="text-[#289B4F] text-4xl" />
              </button>
              <div className="flex flex-col">
                <span>Email</span>
                <input
                  placeholder={user.email}
                  className="font-bold "
                />
              </div>
              <CiEdit className="text-[#1D62CA] text-2xl ml-32" />
            </div>

            {/* Card */}
            <div className="flex items-center gap-2 border-b pb-2">
              <button className=" bg-[#FFD6D6] rounded-xl p-1">
                <FaRegCreditCard className="text-[#B83232] text-4xl" />
              </button>
              <div className="flex flex-col">
                <span>Card</span>
                <input
                  type="password"
                  placeholder={user.cardNumber}
                  className="font-bold "
                />
              </div>
              <CiEdit className="text-[#1D62CA] text-2xl ml-32" />
            </div>

            {/*  */}
          </div>

        </div>
      </div>
      <div className=" border-t-2">
        <PhoneFooter />
      </div>
    </div>
  );
};

export default UserSetting;
