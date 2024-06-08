import React, { useState } from "react";
import PhoneHeader from "../components/PhoneHeader";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import addmoney from "../assets/addmoney.png";
import axiosBaseURL from "../axiosBaseURL";

const AddBalance = () => {
  const [addBalance, setAddBalance] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleConfirmation = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosBaseURL.post(
        "/account/add-balance",
        { addBalance: parseFloat(addBalance) },
        {
          withCredentials: true,
        }
      );
      setSuccessMessage("Balance added successfully.");
      setErrorMessage(""); 
      console.log(res.data); 
    } catch (error) {
      setErrorMessage("Failed to add balance. Please try again.");
      setSuccessMessage("");  message
      console.log(error); 
    }
  };

  return (
    <div className="bg-[#e0e5e7] h-full">
      <PhoneHeader />
      <div className="custom-container md:flex-row flex flex-col">
        <Link to="/main-profile">
          <div className="text-[#004b95] md:flex-row md:text-nowrap flex font-bold items-center">
            <IoIosArrowBack className="font-bold text-2xl mt-2" />
            <p>Go back to home page</p>
          </div>
        </Link>
        <div className="flex justify-center">
          <img className="w-[80%]" src={addmoney} alt="Add Money" />
        </div>
        <p className="text-2xl font-bold opacity-55 text-center ">
          Add balance
        </p>
        <div className="flex justify-center">
          <input
            value={addBalance}
            onChange={(e) => setAddBalance(e.target.value)}
            className="rounded-xl text-center bg-[#658798] bg-opacity-40 text-sm w-[18rem] p-3 font-bold placeholder:text-[#004b95] placeholder:text-opacity-55"
            placeholder="type balance amount"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleConfirmation}
            className="text-[#fef6ee] mt-5 w-[12rem] rounded-md p-2 bg-[#5d439e] hover:bg-[#9762c9]"
          >
            Confirm
          </button>
        </div>
        {successMessage && (
          <p className="text-green-500 text-center mt-2">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default AddBalance;
