import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/authActions";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register(name, email, password));
    navigate("/login");
  };

  return (
  
      <div className=" flex justify-center items-center h-[100vh]   mx-auto">
        <div className="glassEffect px-4  py-3 rounded-lg">
          <h1 className="text-xl font-bold mb-4">Register</h1>
          <form onSubmit={handleSubmit} className="max-w-sm">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
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
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {loading ? (
              <img
                src="https://cdn.dribbble.com/users/4241225/screenshots/14521747/loading_gif_1_1.gif"
                alt=""
              />
            ) : (
              <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 block w-max mx-auto rounded-md"
            >
              Register
            </button>

            )}
                        <div className="py-2 text-center  text-sm">
              <Link to="/login"> Already have an account? <span className="text-blue-500"> Login </span></Link>
  
            </div>
          </form>
        </div>
      </div>
  );
};

export default RegisterPage;
