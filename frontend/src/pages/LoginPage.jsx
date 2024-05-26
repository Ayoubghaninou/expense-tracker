import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    navigate("/expenses");
  };

  return (
    <div> <h1 className="text-2xl text-center pt-8 font-medium" >
    Welcome Back Again!
  </h1>
    <div className=" flex justify-center items-center h-[80vh]   mx-auto">
   

      <div className="glassEffect px-4  py-3 rounded-lg">
        <h1 className="text-xl text-center font-bold mb-4">Login</h1>
        <form onSubmit={HandleSubmit} className="max-w-sm">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"

              placeholder="PLEASE ENTER YOUR EMAIL ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full text-sm px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="PLEASE ENTER YOUR PASSWORD"

              className="w-full text-sm px-4 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 block w-max mx-auto rounded-md"
          >
            Login
          </button>
          <div className="py-2 text-center  text-sm">
            <Link to="/register"> Don't have an account? <span className="text-blue-500"> Sign up </span></Link>

          </div>
        </form>
      </div>
    </div>
    </div>    
  );
};

export default LoginPage;
