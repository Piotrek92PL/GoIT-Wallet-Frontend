export const selectGetFinances = state => state.finances.finances.data;

export const selectFinancesIsLoading = state =>
	state.finances.finances.isLoading;

export const selectTransactionsData = state => state.finances.transactions.data;

export const selectFinancesTransactionsIsLoading = state =>
	state.finances.transactions.isLoading;

export const selectTransactionForEdit = state => state.finances.transaction.data;

export const selectAddedTransaction = state =>
	state.finances.addedTransactions.data;
