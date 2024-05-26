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

const ExpenseTracker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { expenses, loading, error } = useSelector((state) => state.expenses);
  const user = useSelector((state) => state.user);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [visibleForm, setVisibleForm] = useState(false);
  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleAddExpense = useCallback(
    async (e) => {
      e.preventDefault();
      if (!amount || !category) return;
      const newExpense = { amount, category };
      setAmount("");
      setCategory("");
      if (editId) {
        dispatch(updateExpense(editId, newExpense));
        setEditId(null);
      } else {
        dispatch(addExpense(newExpense));
      }
    },
    [amount, category, editId, dispatch]
  );

  const handleEditClick = (expense) => {
    setEditId(expense._id);
    setAmount(expense.amount);
    setCategory(expense.category);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteExpense(id));
  };

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const showForm = () => {
    setVisibleForm(true);
  };
  return (
    <div className="container relative mx-auto p-4">
      <UserInfo user={user} onLogout={handleLogout}  />
      <h1 className="text-3xl font-bold mb-4">Expense Tracker</h1>
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
      <UseChart />
      <div>
        <h1 className="font-bold text-lg">
          Transitions
        </h1>
      </div>
      <ExpenseList
        expenses={expenses}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        setVisibleForm={setVisibleForm}

      />
      <div className="w-[50px] fixed bottom-10 right-5" onClick={showForm}>
        <img src="https://cdn-icons-png.freepik.com/256/992/992651.png?semt=ais_hybrid"/>
      </div>
    </div>
  );
};

export default ExpenseTracker;
