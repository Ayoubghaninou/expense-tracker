// components/BudgetInput.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserBudget } from "../actions/authActions";

const BudgetInput = () => {
  const dispatch = useDispatch();
  const [budget, setBudget] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserBudget(budget));
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="text-lg font-semibold mb-2">
          Set Your Monthly Budget
        </label>
        <input
          type="number"
          value={budget}
          required
          onChange={(e) => setBudget(e.target.value)}
          className="border rounded-md p-2 mb-2"
          placeholder="Enter your budget"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Save Budget
        </button>
      </form>
    </div>
  );
};

export default BudgetInput;
