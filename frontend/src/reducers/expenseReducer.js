const initialState = {
    loading: true,
    error: null,
    expenses: [],
    earliestDate: null,

  };
  
  const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EXPENSES_SUCCESS':
        return {
          ...state,
          loading: false,
          expenses: action.payload.expenses,
          earliestDate: action.payload.earliestExpense.date,

        };
      case 'FETCH_EXPENSES_ERROR':
      case 'ADD_EXPENSE_ERROR':
      case 'UPDATE_EXPENSE_ERROR':
      case 'DELETE_EXPENSE_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'ADD_EXPENSE_SUCCESS':
        return {
          ...state,
          loading: false,
          expenses: [ action.payload,...state.expenses,],
        };
      case 'UPDATE_EXPENSE_SUCCESS':
        return {
          ...state,
          loading: false,
          expenses: state.expenses.map(expense =>
            expense._id === action.payload._id ? action.payload : expense
          ),
        };
      case 'DELETE_EXPENSE_SUCCESS':
        return {
          ...state,
          loading: false,
          expenses: state.expenses.filter(expense => expense._id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default expenseReducer;
  