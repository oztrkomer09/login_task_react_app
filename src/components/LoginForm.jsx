import loginHead from "../assets/login-head.png";

import two from "../assets/2.png";

import bgLogo from "../assets/bg-logo.png";

import { useUserData } from "../context/Context";

import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { setUserMail, handleLogin } = useUserData();

  const navigate = useNavigate();
  return (
    <div className="mx-auto flex flex-col mt-[135px] w-[400px] px-3 pb-16 items-center">
      {/* Images binded with login form  */}
      <img src={two} alt="two" className="absolute w-64 top-1 " />
      <img src={bgLogo} className="absolute w-[700px]  opacity-50" alt="" />
      <img src={loginHead} className="z-10 w-2/3" alt="loginHead" />

      {/* Login Form Items */}
      <div className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] w-full h-full  rounded-xl flex flex-col px-10 pb-4 border-white border-[1px] font-inter">
        <h1 className="text-[#516BC7] text-2xl font-bold mt-8 mx-auto">
          SIGN IN
        </h1>

        <div className="mt-16 z-30 ">
          {/* Label and Input */}
          <p className="text-[#4C5F82] text-sm cursor-default">E mail Adress</p>
          <input
            type="text"
            placeholder="Enter your mail adress"
            onChange={(e) => setUserMail(e.target.value)}
            className="p-3 text-xs mt-2 rounded-md w-full bg-white text-gray-800"
          />

          {/* Checkbox */}
          <div className="flex my-6 items-center">
            <input
              type="checkbox"
              className="checkbox bg-white mr-2 w-4 h-4 rounded-md"
            />
            <p className="text-[#4C5F82] text-sm cursor-default">Remember me</p>
          </div>

          {/* Submit button and bottom texts */}
          <div className="flex flex-col items-center ">
            <button
              onClick={() => handleLogin({ navigate })}
              className="btn bg-[#516BC7] text-white text-xs w-full border-none"
            >
              Log In
            </button>

            <p className="text-[#4C5F82] text-xs my-6 text-center">
              Forgot Your Password?
            </p>
            <p className="text-[#4C5F82] text-xs text-center">
              Don't have an account?
              <strong className="cursor-pointer hover:underline">
                Sign Up
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
