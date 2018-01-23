export const setSearchTerm = (newSearchTerm) => {
  return {
    type: 'set_search_term',
    payload: `${newSearchTerm} restaurant`,
  };
};
