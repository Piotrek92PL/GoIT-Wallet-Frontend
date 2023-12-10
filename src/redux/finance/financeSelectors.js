export const selectGetFinances = state => state.finance.finances.data;

export const selectFinancesIsLoading = state =>
  state.finance.finances.isLoading;

export const selectTransactionsData = state =>
  state.financeTable.transactions.data;

export const selectFinancesTransactionsIsLoading = state =>
  state.finances.transactions.isLoading;

export const selectTransactionForEdit = state =>
  state.finances.transaction.data;

export const selectAddedTransaction = state =>
  state.finances.addedTransactions.data;
