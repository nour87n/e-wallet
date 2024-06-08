import React, { useState } from "react";
import Loginimage from "../../assets/Loginimage.png";
import { FaApple } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneAndroid, MdOutlinePassword } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import PhoneHeader from "../../components/PhoneHeader";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { login, error, loading, setError } = useLogin(); // Destructure setError from useLogin hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleContinue = async () => {
    if (!email) {
      setError("Email is required."); // Use setError from useLogin hook
    } else if (!password) {
      setError("Password is required."); // Use setError from useLogin hook
    } else {
      setError(""); // Use setError from useLogin hook
      // Proceed with the login logic here
      await login(email, password);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="bg-[#b7cdd8] h-full md:h-screen">
      <PhoneHeader />
      <div className="flex flex-col md:flex-row arsenal-regular">
        <div className="w-full flex justify-center">
          <img className="h-[400px]" src={Loginimage} alt="login" />
        </div>
        <div className="md:bg-white md:flex-col md:pb-[4.7rem]">
          <div className="hidden md:justify-center md:pb-[5rem] md:pt-[5rem] md:flex md:items-center text-[#566167] mynerve-regular">
            <GiWallet className="text-4xl text-[#566167]" />
            <p className="font-bold text-4xl">e-wallet .</p>
          </div>
          <div className="flex flex-col py-3 px-7 bg-white md:bg-white">
            <p className="font-bold text-3xl text-[#004b95] pb-3">
              Enter your mobile number :
            </p>
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center">
                <MdOutlinePhoneAndroid className="text-[#004b95] text-4xl" />
                <input
                  name="email"
                  placeholder="type your email"
                  className="rounded-xl pl-4 bg-[#b7cdd8] bg-opacity-55 placeholder:text-[#004b95] w-[23rem] py-2"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center gap-2">
                <MdOutlinePassword className="text-[#004b95] text-4xl" />
                <input
                  name="password"
                  type="password"
                  placeholder="type your password"
                  className="rounded-xl pl-4 bg-[#b7cdd8] bg-opacity-55 placeholder:text-[#004b95] w-[23rem] py-2"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}{" "}
          {/* Use error from useLogin hook */}
          <div className="flex justify-center pt-3 bg-white md:bg-white pb-3">
            <button
              className="bg-[#9762c9] rounded-xl hover:bg-[#b7cdd8] text-white p-2 w-[25rem]"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
          <div className="bg-white md:bg-white flex flex-col justify-center">
            <p className="border-b-[0.5rem] text-[#5d439e] font-bold border-[#5d439e] text-center">
              Or Continue With :
            </p>
            <div className="flex justify-center gap-10 px-7 py-3">
              <button className="bg-[#b7cdd8] px-7 border-[0.1rem] rounded-xl">
                <FaApple className="text-[#004b95] text-5xl" />
              </button>
              <button className="bg-[#b7cdd8] px-7 rounded-xl border-[0.1rem]">
                <PiFacebookLogoBold className="text-[#004b95] text-5xl" />
              </button>
              <button className="bg-[#b7cdd8] px-7 rounded-xl border-[0.1rem]">
                <CgMail className="text-[#004b95] text-5xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
