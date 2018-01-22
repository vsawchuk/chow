export default (state = {}, action) => {
  switch (action.type) {
    case 'set_current_display_wishlist':
      return action.payload;
    case 'clear_current_display_wishlist':
      return { restaurants: [] };
    default:
      return state;
  }
};
