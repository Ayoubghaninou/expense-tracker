import React from "react";

const ExpenseForm = ({
  amount,
  setAmount,
  category,
  setVisibleForm,
  setCategory,
  editId,
  handleAddExpense,
}) => (
  <div className="fixed bg-white w-4/5 px-5 py-3 top-50  left-5 bottom-50 right-5 mx-auto">
    <div
      className="w-[30px] ml-auto mb-2"
      onClick={() => setVisibleForm(false)}
    >
      <img src="https://www.svgrepo.com/show/155829/minus.svg" />
    </div>
    <form onSubmit={handleAddExpense} className=" mb-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
        className="w-full px-4 py-2 border rounded-md mb-2"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
        className="w-full px-4 py-2 border rounded-md mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        {editId ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  </div>
);

export default ExpenseForm;
