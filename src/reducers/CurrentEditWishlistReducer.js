export default (state = {}, action) => {
  switch (action.type) {
    case 'set_editing_wishlist':
      return action.payload;
    case 'clear_editing_wishlist':
      return {};
    default:
      return state;
  }
};
