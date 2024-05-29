import React from "react";
import AllRoutes from "./AllRoutes";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { ToastContainer } from "react-toastify";
import Desktop_view from "./components/Desktop_view";
const App = () => {
  return (
    <div className="font-primery_font   min-h-screen">

     <div className="hidden md:block bg-blue_c"> <Desktop_view/> </div>

      <div className="md:hidden">
        <AllRoutes />
        <ToastContainer
          className={"toast_custom_design"}
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default App;
