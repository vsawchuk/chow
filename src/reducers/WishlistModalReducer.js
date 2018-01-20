export default (state = false, action) => {
  switch (action.type) {
    case 'display_wishlist_modal':
      return true;
    case 'close_wishlist_modal':
      return false;
    default:
      return state;
  }
};
