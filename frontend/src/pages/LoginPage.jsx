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
    console.log(error)
    navigate("/expenses");
  };

  if (error) {
    return (
      <div id="toast-warning" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
          </svg>
          <span class="sr-only">Warning icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">Improve password difficulty.</div>
      <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
      </button>
  </div>
    )
  }
  return (
    <div> 
      <div className="flex justify-center items-center h-[100vh]   mx-auto">
        <div className="glassEffect px-4  w-[85%] py-3 rounded-lg">
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
