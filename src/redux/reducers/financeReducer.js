const initialState = {
  transactions: [],
  totalBalance: 0,
};

const updateTotalBalance = transactions => {
  if (!Array.isArray(transactions)) {
    console.error('Array?:', transactions);
    return 0;
  }

  return transactions.reduce((acc, transaction) => {
    return transaction.type === 'income'
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'transactions/getAll/fulfilled':
      if (!Array.isArray(action.payload)) {
        console.error('Array?:', action.payload);
        return { ...state, totalBalance: 0 };
      }
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
      const filteredTransactions = state.transactions.filter(
        transaction => transaction.id !== action.payload.id
      );
      return {
        ...state,
        transactions: filteredTransactions,
        totalBalance: updateTotalBalance(filteredTransactions),
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
