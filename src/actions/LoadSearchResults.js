export const loadSearchResults = (results) => {
  return {
    type: 'load_search_results',
    payload: results,
  };
};
