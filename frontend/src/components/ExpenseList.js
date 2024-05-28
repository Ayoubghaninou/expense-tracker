import React, { useEffect, useMemo, useState } from "react";
import { formatDate } from "../utils/dateUtils";
import { FaRegEdit } from "react-icons/fa";
import { MdAutoDelete, MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ExpenseList = ({
  expenses,
  setVisibleForm,
  handleEditClick,
  handleDeleteClick,
}) => {
  const { deleteSuccess, deleteLoading, deleteError } = useSelector(
    (state) => state.expenses
  );

  const dispatch = useDispatch();
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (deleteSuccess) {
      toast.success("Expense deleted");
      dispatch({ type: "RESET_STATUS" });
      setDeletingId(null); // Reset deletingId after successful deletion
    }
  }, [deleteSuccess, dispatch]);

  useEffect(() => {
    if (deleteError) {
      toast.error("Failed to delete your expense");
      dispatch({ type: "RESET_STATUS" });
      setDeletingId(null); // Reset deletingId if there's an error
    }
  }, [deleteError, dispatch]);

  const handleDelete = (id) => {
    setDeletingId(id); // Set the deletingId to the id of the expense being deleted
    handleDeleteClick(id);
  };

  const memoizedExpenses = useMemo(
    () =>
      expenses?.map((expense) => (
        <li
          key={uuidv4()}
          className="flex shadow items-center justify-between bg-white mt-2 px-3 rounded-xl py-1"
        >
          <div>
            <h1 className="font-semibold text-xl">{expense.category}</h1>
            <span className="text-gray-400 text-sm">
              {formatDate(expense.date)}
            </span>
          </div>

          <div className="text-2xl flex justify-center items-center">
            <span className="text-black-400 text-xl">₹ {expense.amount}</span>

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
              disabled={deleteLoading && deletingId === expense._id}
              onClick={() => handleDelete(expense._id)}
              className="pl-1 text-red-500"
            >
              {deleteLoading && deletingId === expense._id ? (
                <MdAutoDelete  />
              ) : (
                <MdDelete />
              )}
            </button>
          </div>
        </li>
      )),
    [expenses, handleEditClick, handleDeleteClick, deleteLoading, deletingId]
  );

  return <ul>{memoizedExpenses}</ul>;
};

export default ExpenseList;
