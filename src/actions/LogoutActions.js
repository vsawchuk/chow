import { clearWishlists } from './ClearWishlists';
import { clearCurrentWishlist } from './ClearCurrentWishlist';
import { logoutUser } from './LogoutUser';

export const logoutActions = () => {
  return (dispatch) => {
    dispatch(clearWishlists());
    dispatch(clearCurrentWishlist());
    dispatch(logoutUser());
  };
};
