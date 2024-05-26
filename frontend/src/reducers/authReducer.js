// reducers/userReducer.js

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  budget: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.name,
        budget: action.payload.budget,
        token: action.payload.token,
        loading: false,
      };
    case "LOGIN_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "UPDATE_BUDGET_SUCCESS":
      return {
        ...state,
        budget: action.payload,
        //  user: { ...state.user, budget: action.payload },
      };
    case "UPDATE_BUDGET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "REGISTER_REQUEST":
      return { ...state, loading: true, error: null };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "REGISTER_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "LOGOUT":
      return { ...state, user: null, token: null };

    default:
      return state;
  }
};

export default userReducer;
