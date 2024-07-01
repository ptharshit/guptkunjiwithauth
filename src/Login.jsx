import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-hidden">
      <h2 className="text-center bg-slate-700 font-mono text-green-400 p-5 font-bold text-3xl sm:text-4xl md:text-5xl">
        Welcome to Dangerous House
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-8 lg:gap-x-16 xl:gap-x-72 py-10 lg:py-0 flex-grow">
        <div className="p-5 bg-white rounded-2xl mb-10 lg:mb-0">
          <img
            className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-80 rounded-2xl cursor-pointer"
            src="/img.jpg"
            alt="Ram Ram bhai"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 lg:h-auto">
          <img
            className="hidden sm:block w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72"
            src="/logo.gif"
            alt="Logo"
          />
          <button
            onClick={() => loginWithRedirect()}
            className="bg-gray-900 text-2xl sm:text-3xl md:text-4xl text-green-500 font-mono font-bold p-3 md:p-5 rounded-2xl"
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
