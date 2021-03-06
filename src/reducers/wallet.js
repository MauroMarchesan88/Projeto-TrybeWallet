// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET } from '../actions';
import { EXPENSES, UPD_EXPENSES } from '../actions/addExpense';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      currencies: Object.keys(action.wallet) };
  case EXPENSES:
    return {
      ...state,
      expenses: state.expenses.concat(action.expenses) };
  case UPD_EXPENSES:
    return {
      ...state,
      expenses: action.expenses };
  default:
    return state;
  }
};

export default wallet;
