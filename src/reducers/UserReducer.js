export default (state = {}, action) => {
  switch (action.type) {
    case 'login_user': {
      return action.payload;
    }
    case 'logout_user': {
      return {};
    }
    default: {
      return state;
    }
  }
};
