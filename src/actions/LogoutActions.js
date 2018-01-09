import { clearWishlists } from './ClearWishlists';
import { logoutUser } from './LogoutUser';

export const logoutActions = () => {
  return (dispatch) => {
    dispatch(clearWishlists());
    dispatch(logoutUser());
  };
};
