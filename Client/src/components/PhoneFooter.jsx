import React from "react";
import { PiMoneyLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { GrUserSettings } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const PhoneFooter = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const handleLogout = async (e) => {
    await logout();
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-between md:border-t-2 md:border-gray-800 items-center  bg-opacity-45  custom-container pt-4 ">
        <Link to="/main-profile">
          <button className="   ">
            <IoHomeOutline className="text-[#191919] text-xl " />
          </button>
        </Link>
        <Link to="/profile-setting">
          <button className="">
            <GrUserSettings className="text-[#191919]   text-xl  " />
          </button>
        </Link>
        <Link to="/send-money">
          <button>
            <PiMoneyLight className="text-[#191919]  text-2xl " />
          </button>
        </Link>

        <button onClick={handleLogout}>
          <TbLogout className="text-[#191919]  text-xl" />
        </button>
      </div>
    </div>
  );
};

export default PhoneFooter;
