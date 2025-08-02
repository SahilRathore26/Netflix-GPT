import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom"

const Login = () => {

  const [ signInForm, setSignInForm ] = useState(true);

  const toggleToSignUp = () => {
    setSignInForm(!signInForm);
  }
  return (
    <div className="flex">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg-img"
        ></img>
      </div>
      <div className=" flex m-auto justify-center">
        <form className="absolute w-[480px] py-12 px-16 mt-32 justify-center bg-black bg-opacity-80 rounded-md text-white">
          <h1 className="font-bold text-3xl mb-5">{signInForm ? "Sign In" : "Sign Up"}</h1>
          {!signInForm && <input
            type="text"
            placeholder="Enter Full Name"
            className="my-2 p-4 w-full bg-gray-700 rounded-md bg-opacity-75"
          ></input> }
          <input
            type="text"
            placeholder="Email or mobile number"
            className="my-2 p-4 w-full bg-gray-700 rounded-md bg-opacity-75"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="my-2 p-4 w-full bg-gray-700 rounded-md bg-opacity-75"
          ></input>
          <button className="my-2 p-2 w-full text-sm font-semibold bg-red-700 rounded-md">
            {signInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-400 text-center m-1">OR</p>
          <button className="my-2 p-2 w-full text-sm font-semibold bg-neutral-600 rounded-md bg-opacity-70">
            Use a sign-in code
          </button>
          <p className="text-center m-2 underline"><Link to="/forgot-password">Forgot password?</Link></p> 
          <p className="text-gray-400 my-5">{signInForm ? "New to Netflix? " : "Already a user? "} <span className="text-white font-bold cursor-pointer" onClick={toggleToSignUp}>{signInForm ? "Sign up now" : "Sign in now"}</span></p>
          <p className="text-neutral-400 text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
