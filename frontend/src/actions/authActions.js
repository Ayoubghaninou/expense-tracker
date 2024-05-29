import axios from "axios";
const baseurl = "http://localhost:3000/api/users";
//https://expense-tracker-nu-weld.vercel.app
export const login = (email, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const res = await axios.post(`${baseurl}/login`, { email, password });
    sessionStorage.setItem("token", res.data.token);
    sessionStorage.setItem("budget",res.data.budget)
    sessionStorage.setItem("user",res.data.name)

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error?.response?.data?.message });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  try {
    const res = await axios.post(`${baseurl}/register`, {
      name,
      email,
      password,
    });

    dispatch({ type: "REGISTER_SUCCESS", payload: res.data.message });
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR",
      payload: error?.response?.data?.message,
    });
  }
};

export const updateUserBudget = (budget) => async (dispatch) => {
  dispatch({ type: "UPDATE_BUDGET_REQUEST" });
  try {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.put(`${baseurl}/budget`, { budget }, config);
    sessionStorage.setItem("budget",res.data.budget)
    dispatch({ type: "UPDATE_BUDGET_SUCCESS", payload: res.data.budget });
  } catch (error) {
    dispatch({
      type: "UPDATE_BUDGET_ERROR",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};
