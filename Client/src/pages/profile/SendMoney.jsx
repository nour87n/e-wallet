import React, { useState , useEffect } from "react";
import PhoneHeader from "../../components/PhoneHeader";
import { IoIosArrowBack } from "react-icons/io";
import girlprofilepic from "../../assets/girlprofilepic.png";
import { Link } from "react-router-dom";
import PhoneFooter from "../../components/PhoneFooter";
import machine from "../../assets/machine.png";
import Failed from "./Failed";
import axiosBaseURL from "../../axiosBaseURL";

const SendMoney = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [balance, setBalance] = useState(""); // example balance
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); 

  const checkBalance = async () => {
    try {
      const res = await axiosBaseURL.get("/account/check-balance", {
        withCredentials: true,
      });
      setBalance(res.data.balance);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    checkBalance();
  },[])

  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(()=>true)
    if (!phoneNumber) {
      setError("Phone number is required.");
      return;
    } else if (phoneNumber.length < 10) {
      setError("Write a correct phone number.");
      return;
    } else if (!amount) {
      setError("Amount is required.");
      return;
    } else if (parseFloat(amount) > balance) {
      setError("");
      setInsufficientBalance(true);
      return;
    } else {
      setError("");
      setInsufficientBalance(false);
      setBalance(balance - parseFloat(amount));
    }

    // axios
    try {
      const res = await axiosBaseURL.post("/account/transfer", {
        receiver: +phoneNumber,
        amount,
      },{
        withCredentials: true,
      });
      setSuccess(()=>true)
      setLoading(()=>false)
    } catch (error) {
      console.error(error);
      setError(()=>error.response.data);
      setLoading(() => false)
    }
  };

  return (
    <div className="bg-[#e0e5e7] h-full">
      {insufficientBalance ? (
        <Failed />
      ) : (
        <>
          <PhoneHeader />
          <div className="custom-container md:flex-row flex flex-col">
            <div className="hidden md:flex md:mt-14">
              <img src={machine} alt="Machine" />
            </div>
            <Link to="/main-profile">
              <div className="text-[#004b95] md:flex-row md:text-nowrap flex font-bold items-center">
                <IoIosArrowBack className="font-bold text-2xl mt-2" />
                <p>Go back to home page</p>
              </div>
            </Link>
            <div className="mt-4 flex flex-col items-center gap-2 md:mt-14">
              <p className="text-2xl font-bold">Transfer to :</p>
              <img
                className="bg-white rounded-full w-[30%]"
                src={girlprofilepic}
                alt="Profile"
              />
              {
                success ?
              <p className="text-xl font-bold text-green-500">the Money transfer with success</p> 
              : null
              }
              <input
                placeholder="Enter your contact phone number"
                className="rounded-xl text-center bg-[#658798] bg-opacity-40 text-sm w-[18rem] p-3 font-bold placeholder:text-[#004b95] placeholder:text-opacity-55"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <p className="opacity-50 text-2xl">ENTER AMOUNT</p>
              <input
                placeholder="000 000$"
                className="bg-opacity-55 text-3xl text-center py-3 rounded-xl w-[13rem]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {error && (
                <p className="text-black bg-red-400 rounded-lg px-1 ">
                  {error}
                </p>
              )}
              <button
                className="text-[#fef6ee] mt-5 w-[12rem] rounded-md p-2 bg-[#5d439e] hover:bg-[#9762c9]"
                onClick={handleConfirm}
              >
                {
                  loading ? "Loading..." : "CONFIRM"}
              </button>
            </div>
          </div>
          <div className="mt-4">
            <PhoneFooter />
          </div>
        </>
      )}
    </div>
  );
};

export default SendMoney;
