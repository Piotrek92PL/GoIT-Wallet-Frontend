export const selectIsError = state => state.categories.isError;
export const selectCategories = state => state.categories.data;

export const getCategory = (nr, arr) => {
  //   const arr = useSelector(selectCategories); <- to piszesz w komponencie i wywolujesz getCategory(twoj_nr,arr)
  return arr.find(cat => cat.id === nr);
};

export const getCategoryName = (nr, arr) => {
  const found = Array.isArray(arr) ? arr.find(cat => cat.id === nr) : false;
  return found ? (found.name ? found.name : 'Other') : 'Other';
};

export const getCategoryColor = (nr, arr) => {
  const found = Array.isArray(arr) ? arr.find(cat => cat.id === nr) : false;
  return found
    ? found.color
      ? found.color
      : 'CornflowerBlue'
    : 'CornflowerBlue';
};
