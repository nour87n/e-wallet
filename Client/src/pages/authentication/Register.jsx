import React, { useState } from "react";
import { GiWallet } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import registerImg from "../../assets/register.png";
import PhoneHeader from "../../components/PhoneHeader";
import useRegister from "../../hooks/useRegister";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber , setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const {register } = useRegister()

  const handleRegister = async () => {
    if (!fullName) {
      setError("Name is required.");
    } else if (!email) {
      setError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid.");
    } else if (!password) {
      setError("Password is required.");
    } else if (!phoneNumber) {
      setError("Phone number is required.");
      // is number or not
    } else if (Number.isNaN(phoneNumber)){
      setError("Phone number should be a number.")
    } else {
      setError("");
      console.log(email, password, fullName, phoneNumber)
      try {
        await register(email, password, fullName, phoneNumber) 
      }
      catch (error) {
        console.error(error)
        setError(()=>error.response.data.message)
      }
    }
  };

  return (
    <div className="bg-[#e0e5e7] h-full text-[#44130b] ">
      <PhoneHeader />
      <div className="custom-container md:flex md:w-4/5">
        <div className="hidden md:flex">
          <img
            className="md:w-[35rem] md:h-[35rem]"
            src={registerImg}
            alt="register"
          />
        </div>
        <div className="flex flex-col pt-10">
          {/* logo */}
          <div className="flex gap-2 items-center justify-center text-[#4f5d64] mynerve-regular">
            <GiWallet className="text-4xl text-[#4f5d64]" />
            <p className="font-bold text-4xl">e-wallet .</p>
          </div>
          {/* inputs */}
          <div className="flex flex-col arsenal-regular justify-center items-center pt-7">
            <p className="font-bold text-4xl text-[#5d439e]">
              Create Account :
            </p>

            {/* name */}
            <h1 className="font-bold text-2xl text-[#004b95] pr-[15.5rem]">
              Name:
            </h1>
            <input
              placeholder="type your full name"
              className="rounded-md pl-4 bg-[#658798] bg-opacity-40 py-2 text-xl w-[20rem] placeholder:text-[#004b95] placeholder:text-opacity-55"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {/* email */}
            <h1 className="font-bold text-2xl text-[#004b95] pr-[9rem]">
              Phone Number:
            </h1>
            <input
              placeholder="type your email address"
              className="rounded-md pl-4 bg-[#658798] bg-opacity-40 py-2 text-xl w-[20rem] placeholder:text-[#004b95] placeholder:text-opacity-55"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {/* email */}
            <h1 className="font-bold text-2xl text-[#004b95] pr-[15.5rem]">
              Email:
            </h1>
            <input
              placeholder="type your email address"
              className="rounded-md pl-4 bg-[#658798] bg-opacity-40 py-2 text-xl w-[20rem] placeholder:text-[#004b95] placeholder:text-opacity-55"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* password */}
            <h1 className="font-bold text-2xl text-[#004b95] pr-[13rem]">
              Password:
            </h1>
            <input
              type="password"
              placeholder="type your password"
              className="rounded-md pl-4 bg-[#658798] bg-opacity-40 py-2 text-xl w-[20rem] placeholder:text-[#004b95] placeholder:text-opacity-55"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>
          {/* error message */}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {/* button */}
          <div className="pt-5 flex items-center justify-center">
            <button
              className="text-[#fef6ee] w-[20rem] rounded-md p-2 bg-[#5d439e] hover:bg-[#9762c9]"
              onClick={handleRegister}
            >
              Create new account
            </button>
          </div>
          {/* continue with */}
          <div className="pt-4 flex flex-col justify-center">
            <p className="border-b-[0.5rem] text-[#004b95] font-bold border-[#5d439e] text-center">
              Or Continue With :
            </p>
            <div className="flex justify-center gap-10 px-7 py-3">
              <button className="bg-[#b7cdd8] px-7">
                <FaApple className="text-[#004b95] text-5xl" />
              </button>
              <button className="bg-[#b7cdd8] px-7">
                <PiFacebookLogoBold className="text-[#004b95] text-5xl" />
              </button>
              <button className="bg-[#b7cdd8] px-7">
                <CgMail className="text-[#004b95] text-5xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
