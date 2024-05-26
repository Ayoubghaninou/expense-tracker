import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="text-center relative  h-[90vh]">
            <img src="/budget.png" className="mt-5mx-auto" alt="" />
            <h1 className="text-3xl font-bold text-gray-700 pt-5">Budget. Track. Control.</h1>
            <h2 className="text-base text-gray-600">Take Charge of Your Finances.</h2>
            <div className="absolute w-full bottom-10">
                <button className="bg-blue-500  py-1  text-xl text-white shadow-2xl rounded-lg w-4/5 font-semibold">
                    <Link to="/register">Register</Link>
                </button>
                <button className="bg-gray-400  my-2 py-1  text-xl  shadow-2xl rounded-lg w-4/5 font-semibold">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
