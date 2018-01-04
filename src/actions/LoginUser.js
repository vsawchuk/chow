export const loginUser = (user) => {
  return {
    type: 'login_user',
    payload: user,
  };
};
