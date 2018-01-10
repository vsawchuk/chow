export default (state = {}, action) => {
  switch (action.type) {
    case 'set_current_wishlist':
      return action.payload;
    case 'clear_current_wishlist':
      return {};
    default:
      return state;
  }
};
