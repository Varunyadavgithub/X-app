import React, { useState } from "react";
import logo from "../assets/X-logo.png";

const Login = () => {
    const [isLogin, setIsLogin]=useState(true);
    const loginSignupHandler=()=>{
      setIsLogin(!isLogin);
    }
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex items-center justify-evenly w-[80%]">
          <div>
            <img src={logo} alt="logo" width={"300px"} />
          </div>
          <div>
            <div className="my-5">
              <h1 className="font-bold text-6xl">Happening Now !</h1>
            </div>
            <h1 className="mt-4 mb-2 text-2xl font-semibold">{isLogin?"Login":"SignUp"}</h1>
            <form className="flex flex-col w-[55%]">
                {
                    !isLogin && (<>
                    <input type="text" placeholder="Name" className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"/>
                    <input type="text" placeholder="Username" className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"/></>)
                }
              <input type="text" placeholder="Email" className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"/>
              <input type="text" placeholder="Password" className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold"/>
              <button className="bg-[#1098F0] border-none py-2 my-4 rounded-full text-lg text-white  hover:bg-[#106df0e3]">{isLogin?"Login":"Create Account"}</button>
              <h1>{isLogin ? "Do not have an account?":"Already have an account?"} <span className="font-semibold text-blue-600 cursor-pointer hover:underline" onClick={loginSignupHandler}>{isLogin?"SignUp":"Login"}</span></h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;