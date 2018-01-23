export default (state = false, action) => {
  switch (action.type) {
    case 'set_loading':
      return true;
    case 'clear_loading':
      return false;
    default:
      return state;
  }
};
