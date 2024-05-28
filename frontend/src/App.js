import React from "react";
import AllRoutes from "./AllRoutes";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="bg-[#d4d4d4] font-primery_font  min-h-screen">
      <AllRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
