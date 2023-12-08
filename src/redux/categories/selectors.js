export const selectIsError = state => state.categories.isError;
export const selectCategories = state => state.categories.data;

export const getCategory = (nr, arr) => {
  //   const arr = useSelector(selectCategories); <- to piszesz w komponencie i wywolujesz getCategory(twoj_nr,arr)
  return arr.find(cat => cat.id === nr);
};

export const getCategoryName = (nr, arr) => {
  return arr.find(cat => cat.id === nr).name || 'Other';
};

export const getCategoryColor = (nr, arr) => {
  return arr.find(cat => cat.id === nr).color || 'Other';
};
