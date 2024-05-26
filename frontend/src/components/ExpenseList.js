import React, { useMemo } from "react";
import { formatDate } from "../utils/dateUtils";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
          key={expense.category}
          className="flex shadow items-center justify-between  bg-white mt-2 px-3 rounded-xl py-1"
        >
          <div>
            <h1 className="font-semiold text-xl"> {expense.category} </h1>
            <span className="text-gray-400 text-sm">
              {formatDate(expense.date)}
            </span>
          </div>

          <div className="text-2xl  flex justify-center items-center">
            <span className="text-black-400 text-xl">  ₹ {expense.amount} </span>

            <button
              onClick={() => {
                setVisibleForm(true);
                handleEditClick(expense);
              }}
              className="pl-3 pr-1"
            >
              <FaRegEdit />
            </button>
            <button
              onClick={() => handleDeleteClick(expense._id)}
              className="pl-1 text-red-500"
            >
              <MdDelete />
            </button>
          </div>
        </li>
      )),
    [expenses, handleEditClick, handleDeleteClick]
  );

  return <ul>{memoizedExpenses}</ul>;
};

export default ExpenseList;
