export default (state = 'add', action) => {
  switch (action.type) {
    case 'set_wishlist_modal_type':
      return action.payload;
    default:
      return state;
  }
};
