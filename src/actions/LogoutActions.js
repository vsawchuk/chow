import { clearWishlists } from './ClearWishlists';
import { clearCurrentWishlist } from './ClearCurrentWishlist';
import { clearCurrentDisplayWishlist } from './ClearCurrentDisplayWishlist';
import { clearUserLocation } from './ClearUserLocation';
import { clearUserSearchCount } from './ClearUserSearchCount';
import { logoutUser } from './LogoutUser';

export const logoutActions = () => {
  return (dispatch) => {
    dispatch(clearWishlists());
    dispatch(clearCurrentWishlist());
    dispatch(clearCurrentDisplayWishlist());
    dispatch(clearUserLocation());
    dispatch(clearUserSearchCount());
    dispatch(logoutUser());
  };
};
