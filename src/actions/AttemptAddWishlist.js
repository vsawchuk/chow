import axios from 'axios';
import { getWishlists } from './GetWishlists';
import { closeWishlistModal } from './CloseWishlistModal';

export const attemptAddWishlist = (wishlistName, userId) => {
  const wishlist = {
    name: wishlistName,
    userId,
  };
  return (dispatch) => {
    axios.post(`/users/${userId}/wishlists`, wishlist)
      .then((response) => {
        dispatch(getWishlists(userId));
        dispatch(closeWishlistModal());
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
