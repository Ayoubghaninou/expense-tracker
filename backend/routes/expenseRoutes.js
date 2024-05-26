const express = require("express");
const Expense = require("../models/Expense");
const auth = require("../middleware/auth");

const router = express.Router();

// Create a new expense
router.post("/", auth, async (req, res) => {
  const { amount, category } = req.body;
  const userId = req.userId;

  try {
    const expense = new Expense({ userId, amount, category });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all expenses for the authenticated user
router.get("/", auth, async (req, res) => {
  const userId = req.userId;
  try {
    const expenses = await Expense.find({ userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an expense by ID using PATCH
router.patch("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const userId = req.userId;

  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: id, userId },
      updates,
      { new: true, runValidators: true }
    );
    if (!expense) {
      return res
        .status(404)
        .json({ error: "Expense not found or user unauthorized" });
    }
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an expense by ID
router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const expense = await Expense.findOneAndDelete({ _id: id, userId });
    if (!expense) {
      return res
        .status(404)
        .json({ error: "Expense not found or user unauthorized" });
    }
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
