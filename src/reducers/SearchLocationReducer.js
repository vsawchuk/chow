export default (state = '', action) => {
  switch (action.type) {
    case 'set_search_location':
      return action.payload;
    case 'clear_search_location':
      return '';
    default:
      return state;
  }
};
