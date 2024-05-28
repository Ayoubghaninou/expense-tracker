import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="text-center relative  h-[90vh]">
      <img src="/budget.png" className="mt-5mx-auto" alt="" />
      <h1 className="text-3xl font-bold text-black -200 pt-5">
        Budget. Track. Control.
      </h1>
      <h2 className="text-base text-black -300">Take Charge of Your Finances.</h2>
      <div className="absolute w-full bottom-2">
        <Link to="/register">
          {" "}
          <button className="glassEffect  py-1  text-xl  shadow-2xl rounded-lg w-4/5 font-semibold">
            Register
          </button>{" "}
        </Link>
        <Link to="/login">
          {" "}
          <button className="bg-gray-400  my-2 py-1  text-xl  shadow-2xl rounded-lg w-4/5 font-semibold">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
