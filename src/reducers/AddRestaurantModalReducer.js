export default (state = false, action) => {
  switch (action.type) {
    case 'display_add_restaurant_modal':
      return true;
    case 'close_add_restaurant_modal':
      return false;
    default:
      return state;
  }
};
