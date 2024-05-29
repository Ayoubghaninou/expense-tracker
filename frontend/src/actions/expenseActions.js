import axios from "axios";
const baseurl = "http://localhost:3000/api/expenses";
//https://expense-tracker-nu-weld.vercel.app

export const fetchExpenses = (month,year) => async (dispatch) => {
  dispatch({ type: "FETCH_EXPENSES_REQUEST" }); // Dispatch request action

  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.get(`${baseurl}/${month}/${year}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "FETCH_EXPENSES_SUCCESS", payload: res.data });
  } catch (error) {
 
    dispatch({ type: "FETCH_EXPENSES_ERROR", payload: error?.response?.data?.message, });
  }
};

export const addExpense = (expenseData) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  dispatch({type:"ADD_EXPENSE_REQUEST"})
  try {
    const res = await axios.post(baseurl, expenseData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "ADD_EXPENSE_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ADD_EXPENSE_ERROR", payload: error?.response?.data?.message, });
  }
};

export const updateExpense = (id, updates) => async (dispatch) => {
  dispatch({type:"UPDATE_EXPENSE_REQUEST"})
  try {
    const token = sessionStorage.getItem("token");

    const res = await axios.patch(`${baseurl}/${id}`, updates, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "UPDATE_EXPENSE_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "UPDATE_EXPENSE_ERROR", payload: error?.response?.data?.message, });
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  dispatch({type:"DELETE_EXPENSE_REQUEST"})
  try {
    const token = sessionStorage.getItem("token");

    await axios.delete(`${baseurl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "DELETE_EXPENSE_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_EXPENSE_ERROR", payload: error?.response?.data?.message, });
  }
};

export const logout = () => (dispatch) => {
  // Your logout logic here
  dispatch({ type: "LOGOUT" });
};