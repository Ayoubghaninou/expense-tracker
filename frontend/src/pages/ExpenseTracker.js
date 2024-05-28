import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

import {
  fetchExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  logout,
} from "../actions/expenseActions";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import UserInfo from "../components/UserInfo";
import UseChart from "../components/UseChart";
import BudgetInput from "../components/BudgetInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const ExpenseTracker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { budget, token, user } = useSelector((state) => state.auth);

  const { expenses, earliestDate, fetchLoading, fetchError } = useSelector(
    (state) => state.expenses
  );
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [visibleForm, setVisibleForm] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Default to current month
  const [year, setYear] = useState(new Date().getFullYear()); // Default to current year
  const [showBudgetModal, setBudgetModal] = useState(false);
  useEffect(() => {
    if (token) {
      toast.success("Login successful!");
    }
  }, []);

  const getMonthOptions = () => {
    if (!earliestDate) return [];

    const startDate = new Date(earliestDate);
    const currentDate = new Date();

    let months = [];
    for (let y = startDate.getFullYear(); y <= currentDate.getFullYear(); y++) {
      let startM = y === startDate.getFullYear() ? startDate.getMonth() + 1 : 1;
      let endM =
        y === currentDate.getFullYear() ? currentDate.getMonth() + 1 : 12;
      for (let m = startM; m <= endM; m++) {
        months.push({ year: y, month: m });
      }
    }
    return months;
  };

  useEffect(() => {
    dispatch(fetchExpenses(month, year));
  }, [dispatch, month, year]);

  const handleAddExpense = useCallback(
    async (e) => {
      e.preventDefault();
      if (!amount || !category) return;
      const newExpense = { amount, category };
      setAmount("");
      setCategory("");
      if (editId) {
        await dispatch(updateExpense(editId, newExpense));
        setVisibleForm(false);
        setEditId(null);
      } else {
        await dispatch(addExpense(newExpense));
        setVisibleForm(false);
      }
    },
    [amount, category, editId, dispatch]
  );

  const handleEditClick = (expense) => {
    setEditId(expense._id);
    setAmount(expense.amount);
    setCategory(expense.category);
    setVisibleForm(true);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteExpense(id));
  };

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const handleMonthChange = (e) => {
    setMonth(Number(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(Number(e.target.value));
  };


    if (fetchLoading) {
      return (
        <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
          <div class="flex items-center w-full">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div class="flex items-center w-full max-w-[480px]">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div class="flex items-center w-full max-w-[400px]">
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div class="flex items-center w-full max-w-[480px]">
            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div class="flex items-center w-full max-w-[440px]">
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </div>
          <div class="flex items-center w-full max-w-[360px]">
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      );
    }


  if (fetchError)
    return <div className="text-center text-2xl mt-2"> {fetchError}</div>;

  const showForm = () => {
    setVisibleForm(!visibleForm);
  };

  const totalExpense = expenses.reduce((accumulator, item) => {
    return (accumulator += item.amount);
  }, 0);

  function onEditBudget() {
    setBudgetModal(!showBudgetModal);
  }

  return (
    <div className="container relative mx-auto pb-20 p-4">
      <UserInfo user={user} onLogout={handleLogout} />

      {showBudgetModal && <BudgetInput setBudgetModal={setBudgetModal} />}
      {visibleForm && (
        <ExpenseForm
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          editId={editId}
          setVisibleForm={setVisibleForm}
          handleAddExpense={handleAddExpense}
        />
      )}
      <UseChart
        totalExpense={totalExpense}
        onEditBudget={onEditBudget}
        budget={budget}
      />
      <div className="flex justify-between items-start  pt-2">
        <div>
          {" "}
          <h1 className="font-bold text-xl">Transactions</h1>
          <div className="flex mb-4">
            <select
              value={month}
              onChange={handleMonthChange}
              className="border rounded-md p-2 mr-2"
            >
              {getMonthOptions().map(({ year, month }) => (
                <option key={uuidv4()} value={month}>
                  {new Date(year, month - 1).toLocaleString("default", {
                    month: "long",
                  })}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={handleYearChange}
              className="border rounded-md p-2"
            >
              {Array.from(
                {
                  length:
                    new Date().getFullYear() -
                    new Date(earliestDate).getFullYear() +
                    1,
                },
                (_, i) => new Date().getFullYear() - i
              ).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          onClick={showForm}
          className="bg-green-700 mt-1 font-bold rounded-lg flex items-center text-white h-max px-2 py-1"
        >
          {" "}
          <IoMdAddCircleOutline />
          ADD
        </div>
      </div>
      <ExpenseList
        expenses={expenses}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        setVisibleForm={setVisibleForm}
      />
    </div>
  );
};

export default ExpenseTracker;
