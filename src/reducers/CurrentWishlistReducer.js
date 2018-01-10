export default (state = -1, action) => {
  switch (action.type) {
    case 'set_current_wishlist':
      return action.payload;
    case 'clear_current_wishlist':
      return -1;
    default:
      return state;
  }
};
