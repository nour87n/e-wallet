import React, { Component } from "react";
import Loginimage from "../assets/Loginimage.png";
import { FaApple } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneAndroid, MdOutlinePassword } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import PhoneHeader from "../components/PhoneHeader";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };

  }

  handleContinue = () => {
    const { email, password } = this.state;
    if (!email) {
      this.setState({ error: "Email is required." });
    } else if (!password) {
      this.setState({ error: "Password is required." });
    } else {
      this.setState({ error: "" });
      // Proceed with the login logic here
    }
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="bg-[#b7cdd8] h-full md:h-screen">
        <PhoneHeader />
        <div className="flex flex-col md:flex-row arsenal-regular">
          {/* img */}
          <div className="w-full flex justify-center">
            <img className="h-[400px]" src={Loginimage} alt="login" />
          </div>
          {/* input */}
          <div className="md:bg-white md:flex-col md:pb-[4.7rem]">
            <div className="hidden md:justify-center md:pb-[5rem] md:pt-[5rem] md:flex md:items-center text-[#44130b] mynerve-regular">
              <GiWallet className="text-4xl text-[#44130b]" />
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
                    onChange={this.handleInputChange}
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
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            {/* error message */}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {/* button */}
            <div className="flex justify-center pt-3 bg-white md:bg-white pb-3">
              <button
                className="bg-[#9762c9] rounded-xl hover:bg-[#b7cdd8] text-white p-2 w-[25rem]"
                onClick={this.handleContinue}
              >
                Continue
              </button>
            </div>
            {/* continue with */}
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
  }
}

export default Login;
