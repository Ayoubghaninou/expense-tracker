import React, { useMemo } from "react";
import { formatDate } from "../utils/dateUtils";

const ExpenseList = ({
  expenses,
  setVisibleForm,
  handleEditClick,
  handleDeleteClick,
}) => {
  const memoizedExpenses = useMemo(
    () =>
      expenses?.map((expense) => (
        <li
          key={expense._id}
          className="flex items-center justify-between border-b bg-gray-200 mt-2 px-3 rounded-2xl py-1"
        >
          <div>
         <h1 className="font-semiold text-xl"> {expense.category} </h1>   
             <span className="text-gray-400 text-sm">{formatDate(expense.date)}</span>
          </div>
          <div>
            <div>
              <h1 className="text-red-400 text-xl">- {expense.amount} </h1>
            </div>
            <button
              onClick={() => {
                setVisibleForm(true);
                handleEditClick(expense);
              }}
              className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteClick(expense._id)}
              className="bg-red-500 text-white py-1 px-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </li>
      )),
    [expenses, handleEditClick, handleDeleteClick]
  );

  return <ul>{memoizedExpenses}</ul>;
};

export default ExpenseList;
