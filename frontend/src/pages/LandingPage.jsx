import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-blue_c text-center relative  min-h-[100vh]">
      <h1 className="text-[7vw] font-bold text-white  pt-[10vh]">
        BUDGET. TRACK. CONTROL
      </h1>
      <h2 className="text-lg font-normal	 text-yellow_c ">
        Take Charge Of Your Finances
      </h2>
      <img src="/budget.png" className="pt-[10vh] w-[80vw] mx-auto" alt="" />

      <div className="w-3/5 rounded-2xl mt-[10vh] mx-auto bg-gray_c">
        <Link to="/register">
          {" "}
          <button className="py-2 text-blue_c text-xl  shadow-2xl rounded-lg w-4/5 font-medium">
            REGISTER NOW
          </button>{" "}
        </Link>
      </div>
      <div className="w-3/5 rounded-2xl mt-[2vh] mx-auto bg-gray_c">

      <Link to="/login">
        {" "}
        <button className="py-2  text-blue_c text-xl  shadow-2xl rounded-lg w-4/5 font-medium">
          LOGIN
        </button>
      </Link>
      </div>
    </div>
  );
}

export default LandingPage;
