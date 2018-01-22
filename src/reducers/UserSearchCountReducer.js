export default (state = 0, action) => {
  switch (action.type) {
    case 'increment_user_search_count': {
      return state + 1;
    }
    case 'clear_user_search_count': {
      return 0;
    }
    default: {
      return state;
    }
  }
};
