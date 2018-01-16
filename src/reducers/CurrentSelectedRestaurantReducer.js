export default (state = {}, action) => {
  switch (action.type) {
    case 'set_current_selected_restaurant':
      return action.payload;
    case 'clear_current_selected_restaurant':
      return {};
    default:
      return state;
  }
};
