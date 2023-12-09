const initialState = {
  transactions: [],
  totalBalance: 0,
};

const updateTotalBalance = transactions => {
  return transactions.reduce((acc, transaction) => {
    return transaction.type === 'income'
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'transactions/getAll/fulfilled':
      return {
        ...state,
        transactions: action.payload,
        totalBalance: updateTotalBalance(action.payload),
      };
    case 'transactions/add/fulfilled':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        totalBalance:
          state.totalBalance +
          (action.payload.type === 'income'
            ? action.payload.amount
            : -action.payload.amount),
      };
    case 'transactions/delete/fulfilled':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload.id
        ),
        totalBalance: updateTotalBalance(
          state.transactions.filter(
            transaction => transaction.id !== action.payload.id
          )
        ),
      };
    case 'transactions/update/fulfilled':
      const updatedTransactions = state.transactions.map(transaction =>
        transaction.id === action.payload.id ? action.payload : transaction
      );
      return {
        ...state,
        transactions: updatedTransactions,
        totalBalance: updateTotalBalance(updatedTransactions),
      };
    default:
      return state;
  }
};

export default financeReducer;
