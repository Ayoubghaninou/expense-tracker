import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  fetchExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  logout,
} from "../actions/expenseActions";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import UserInfo from "./UserInfo";
import UseChart from "./UseChart";
import BudgetInput from "./BudgetInput";

const ExpenseTracker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { budget } = useSelector((state) => state.auth);

  const { expenses, earliestDate, loading, error } = useSelector(
    (state) => state.expenses
  );
  const user = useSelector((state) => state.user);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [visibleForm, setVisibleForm] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Default to current month
  const [year, setYear] = useState(new Date().getFullYear()); // Default to current year

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const showForm = () => {
    setVisibleForm(true);
  };

 const totalExpense= expenses.reduce((accumulator ,item) => {
    return accumulator += item.amount;
  }, 0)

  return (
    <div className="container relative mx-auto pb-20 p-4">
      <UserInfo user={user} onLogout={handleLogout} />
      <h1 className="text-6xl font-bold text-gray-300 mb-4 text-center">  {budget}</h1>


      <BudgetInput />

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
      <UseChart totalExpense={totalExpense} budget={budget} />
      <div className="flex justify-between pt-2">
        <h1 className="font-bold text-lg">Transactions</h1>
        <div className="flex mb-4">
          <select
            value={month}
            onChange={handleMonthChange}
            className="border rounded-md p-2 mr-2"
          >
            {getMonthOptions().map(({ year, month }) => (
              <option key={`${year}`} value={month}>
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
      <ExpenseList
        expenses={expenses}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        setVisibleForm={setVisibleForm}
      />
      <div className="w-[40px] fixed bottom-5 right-5" onClick={showForm}>
        <img
          src="https://cdn-icons-png.freepik.com/256/992/992651.png?semt=ais_hybrid"
          alt="Add"
        />
      </div>
    </div>
  );
};

export default ExpenseTracker;
