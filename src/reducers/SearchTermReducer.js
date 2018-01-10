export default (state = '', action) => {
  switch (action.type) {
    case 'set_search_term':
      return action.payload;
    case 'clear_search_term':
      return '';
    default:
      return state;
  }
};
