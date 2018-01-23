export default (state = true, action) => {
  switch (action.type) {
    case 'set_add_restaurant_confirmation':
      return true;
    case 'clear_add_restaurant_confirmation':
      return false;
    default:
      return state;
  }
};
