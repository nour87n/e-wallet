import React from "react";
import { BsStars } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className=" bg-white py-10  ">
      <div className=" flex flex-col custom-container justify-center ">
        {/* text */}
        <div className="flex  flex-col items-center gap-3 arsenal-regular">
          <button className="rounded-full bg-[#b7cdd8] text-2xl  justify-center  font-semibold bg-opacity-50  px-3 flex items-center  w-[21rem]">
            <BsStars className="text-sm text-[#44130b]" />
            Awesome Benefit From Us
          </button>
          <p className="text-3xl text-wrap text-center w-[22rem] font-bold  ">
            Simple, Swift, and Secure, Why You Should Choose Us
          </p>
        </div>
        {/* benifits */}
        <div className="flex gap-6 py-10 justify-between ">
          {/* secure */}
          <div className=" arsenal-regular flex flex-col gap-2 ">
            <button className=" bg-[#68adf2]  rounded-full p-1 w-[3rem] flex justify-center ">
              <RiSecurePaymentFill className="text-4xl text-[#004b95] " />
            </button>
            <p className="font-bold text-xl text">
              Fast and Secure Transactions
            </p>
            <p className=" text-lg">
              Enjoy secure and instant payments anywhere, anytime.
              <span className="font-bold bg-[#b7cdd8]"> e-wallet </span>
              gives you peace of mind.
            </p>
          </div>
          {/* services */}
          <div className=" arsenal-regular flex flex-col gap-2 ">
            <button className=" bg-[#68adf2]  rounded-full p-1 w-[3rem] flex justify-center">
              <RiCustomerService2Fill className="text-4xl text-[#004b95] " />
            </button>
            <p className="font-bold text-xl text">24/7 Customer Support</p>
            <p className=" text-lg">
              Our team is ready to assist you anytime. If you have questions or
              issues, don't hesitate to contact us.
            </p>
          </div>

          {/* easy */}
          <div className=" arsenal-regular flex flex-col gap-2  ">
            <button className=" bg-[#68adf2] rounded-full p-1 w-[3rem] flex justify-center">
              <FaChartPie  className="text-4xl text-[#004b95] " />
            </button>
            <p className="font-bold text-xl text">Easy Financial Management</p>
            <p className=" text-lg">
            Effortlessly manage finances, track expenses, set budgets, and invest with our e-wallet app.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutus;