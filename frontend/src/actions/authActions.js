import axios from "axios";
const baseurl = "http://localhost:3000/api/users";
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseurl}/login`, { email, password });
    sessionStorage.setItem("token",res.data.token)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.response.data.message });
  }
};

export const register = (name,email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseurl}/register`, {name, email, password });
    dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", payload: error.response.data.message });
  }
};
