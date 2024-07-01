import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h2 className="text-center bg-slate-700 font-mono text-green-400 p-5 font-bold text-3xl">
        Welcome to Dangerous House
      </h2>

      <div className="  h-[79vh] flex justify-center items-center  gap-x-72">
        <div className=" hover: p-10 bg-white rounded-2xl">
          <img
            className=" h-96 w-80 rounded-2xl cursor-pointer"
            src="./src/images/img.jpg"
            alt="Ram Ram bhai"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 h-screen">
          <img className=" w-72 h-72 " src="./src/images/logo.gif" alt="" />
          <button
            onClick={() => loginWithRedirect()}
            className=" bg-gray-900 text-4xl text-green-500 font-mono font-bold p-5 rounded-2xl"
          >
            {" "}
            &lt;Join Me/&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
