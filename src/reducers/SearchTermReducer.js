export default (state = 'restaurant', action) => {
  switch (action.type) {
    case 'set_search_term':
      return action.payload;
    case 'clear_search_term':
      return 'restaurant';
    default:
      return state;
  }
};
