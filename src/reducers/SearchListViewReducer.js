export default (state = true, action) => {
  switch (action.type) {
    case 'set_search_list_view':
      return action.payload;
    default:
      return state;
  }
};
