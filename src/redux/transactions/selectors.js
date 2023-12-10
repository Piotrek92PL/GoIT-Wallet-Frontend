export const selectAllTransactions = state => state.transactions.transactions;

export const selectCurrentTransaction = state =>
  state.transactions.currentTransaction;
