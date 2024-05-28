import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ExpenseTracker from "./pages/ExpenseTracker";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/expenses"
        element={
          <PrivateRoute>
            {" "}
            <ExpenseTracker />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<LandingPage/>}/>
      {/* <PrivateRoute path="/expenses" component={ExpenseTracker} /> */}
      {/* <Redirect from="/" to="/expenses" /> */}
    </Routes>
  );
};

export default AllRoutes;
