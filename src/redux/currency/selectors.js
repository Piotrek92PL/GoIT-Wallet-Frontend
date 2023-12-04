export const selectIsLoading = state => state.currency.isLoading;
export const selectIsError = state => state.currency.isError;
export const selectCurrency = state => state.currency.data;
export const selectLastFetchDate = state => state.currency.lastFetchDate;