import React from "react";
import { IoMdBatteryFull } from "react-icons/io";
import { MdOutlineNetworkWifi } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";

const PhoneHeader = () => {
  return (
    <div className=" custom-container py-3 flex  justify-between">
      <h1 className="font-bold text-lg">10:23</h1>
      <div className="flex gap-3 text-lg">
        <IoMdBatteryFull />
        <MdOutlineNetworkWifi />
        <GiNetworkBars />
      </div>
    </div>
  );
};

export default PhoneHeader;
