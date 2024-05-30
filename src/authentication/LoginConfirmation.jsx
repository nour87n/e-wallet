
import secure from "../assets/secure.png";
import { FaApple } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";

const LoginConfirmation = () => {
  return (
    <div className="bg-[#fef6ee] h-full   md:h-screen  ">
    <div className="flex flex-col md:flex-row   arsenal-regular   ">
      {/* img */}
      <div className="w-[100%]  ">
        <img className="h-[80%]" src={secure} />
      </div>
      {/* input */}
      <div className="md:bg-white md:flex-col md:pb-[4.7rem] md:w-[100%]  md:items-center   ">
        <div className="hidden md:justify-center md:pb-[5rem] md:pt-[5rem] md:flex md:items-center   text-[#44130b] mynerve-regular">
          <GiWallet className="text-4xl text-[#44130b]" />
          <p className=" font-bold text-4xl">e-wallet .</p>
        </div>
        <div className="flex flex-col py-3  px-7  bg-white md:bg-white  md:flex md:items-center ">
          <p className="font-bold pl-10 text-2xl text-[#44130b] pb-3 md:text-2xl md:pl-7">
            Enter your password :
          </p>

          <div className="flex items-center md:flex md:justify-center  ">
          <RiLockPasswordFill className="text-[#932f19] text-4xl" />
            <input
              placeholder="type your Phone password"
              className="rounded-full pl-4  bg-[#932f19] bg-opacity-55 placeholder:text-[#932f19] w-[15rem] py-2 "
            ></input>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center pt-3 bg-white md:bg-white md:pl-8 md:flex   pb-3">
          <button className="  bg-[#932f19] rounded-xl hover:bg-[#de4d18] text-white p-2 w-[25rem] md:w-[14rem]    ">
            Login
          </button>
        </div>
        
        
      </div>
    </div>
  </div>
  )
}

export default LoginConfirmation
