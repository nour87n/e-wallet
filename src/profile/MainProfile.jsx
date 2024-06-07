import React from "react";
import PhoneFooter from "../components/PhoneFooter";
import profileimage from "../assets/profileimage.jpg";
import { FiSettings } from "react-icons/fi";
import { LuArrowUpToLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import PhoneHeader from "../components/PhoneHeader";
import { Link } from "react-router-dom";

const MainProfile = () => {
  return (
    <div className="h-screen w-screen">
      <PhoneHeader />
      <div className="bg-[#270685] pb-5 rounded-b-3xl">
        <div className=" custom-container">
          {/* top */}
          <div className="flex flex-col pt-2 ">
            {/* profile */}
            <div className="flex items-center justify-between  ">
              <img className="w-[14%] rounded-full" src={profileimage} />
              <div className="flex flex-col pr-[14rem] ">
                <p className="text-white text-wrap text-lg font-bold">Hello,</p>
                <p className="text-white text-wrap text-lg font-bold">Nour</p>
              </div>
              <Link to="/profile-setting">
                <FiSettings className="text-3xl text-white " />
              </Link>
            </div>
            {/* card */}
            <div className="mt-4 h-[11rem] rounded-xl mx-4  bg-gradient-to-t from-[#6F45E9]  flex flex-col justify-between text-white">
              <div className="flex flex-col">
                <h1 className="text-center font-bold pt-1 opacity-50">
                  Main Balance
                </h1>
                <p className="text-center text-2xl">
                  <span className="font-bold text-4xl">4333</span>.75 $
                </p>
              </div>
              <div className="flex justify-center pb-8 text-xl gap-14 text-center items-center text-white   ">
                <div className="flex  flex-col items-center">
                  <LuArrowUpToLine className="font-bold text-2xl" />
                  <h1 className="font-bold text-sm">Top Up</h1>
                </div>
                <div className="flex  flex-col items-center">
                  <LuArrowDownToLine className="font-bold text-2xl" />
                  <h1 className="font-bold text-sm">Withdraw</h1>
                </div>
                <div className="flex  flex-col items-center">
                  <FaMoneyBillTransfer lassName="font-bold text-3xl" />
                  <h1 className="font-bold text-sm">Transfer</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className=" custom-container mt-3">
        <p className="font-bold text-2xl text-[#004b95] ">Last transction :</p>
      </div>

      <PhoneFooter />
    </div>
  );
};

export default MainProfile;
