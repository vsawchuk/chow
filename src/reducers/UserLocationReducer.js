export default (state = {}, action) => {
  switch (action.type) {
    case 'set_user_location':
      return action.payload;
    case 'clear_user_location':
      return {};
    default:
      return state;
  }
};
