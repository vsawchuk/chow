//TODO: Move into actions and reducers using the API
export default (state = [], action) => {
  switch (action.type) {
    case 'load_wishlists':
      return action.payload;
    case 'clear_wishlists':
      return [];
    default:
      return state;
  }
};
