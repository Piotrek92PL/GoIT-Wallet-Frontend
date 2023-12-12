export const selectAllTransactions = state => state.transactions.transactions;

export const selectCurrentTransaction = state =>
  state.transactions.currentTransaction;

export const selectBalance = state => state.finance.totalBalance;
export const selectIncome = state => state.finance.totalIncome;
export const selectExpense = state => state.finance.totalExpese;

export const selectStatistics = state => state.transactions.statistics;
