// TODO: change default state to false once verified working with redux
export default (state = false, action) => {
  switch (action.type) {
    case 'display_login_modal': {
      return true;
    }
    case 'close_login_modal': {
      return false;
    }
    default: {
      return state;
    }
  }
};
