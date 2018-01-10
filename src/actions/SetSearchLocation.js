export const setSearchLocation = (newSearchLocation) => {
  return {
    type: 'set_search_location',
    payload: newSearchLocation,
  };
};
