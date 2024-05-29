import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ExpenseTracker from "./pages/ExpenseTracker";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import { useSelector } from "react-redux";

const AllRoutes = () => {
  const { token } = useSelector((state) => state.auth);

  function guard_page() {
    if (token) {
      return <ExpenseTracker />;
    }
  }
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <guard_page>
            {" "}
            <LoginPage />
          </guard_page>
        }
      />
      <Route
        path="/register"
        element={
          <guard_page>
            {" "}
            <RegisterPage />{" "}
          </guard_page>
        }
      />
      <Route
        path="/expenses"
        element={
          <PrivateRoute>
            {" "}
            <ExpenseTracker />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AllRoutes;
