export default (state = [], action) => {
  switch (action.type) {
    case 'load_search_results':
      return action.payload;
    case 'clear_search_results':
      return [];
    default:
      return state;
  }
};
