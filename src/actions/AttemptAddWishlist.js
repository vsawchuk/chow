import axios from 'axios';
import { getWishlists } from './GetWishlists';
import { closeAddWishlistModal } from './CloseAddWishlistModal';

export const attemptAddWishlist = (wishlistName, userId) => {
  const wishlist = {
    name: wishlistName,
    userId,
  };
  return (dispatch) => {
    console.log('ATTEMPTING TO ADDwisHLIST')
    axios.post(`/users/${userId}/wishlists`, wishlist)
      .then((response) => {
        dispatch(getWishlists(userId));
        dispatch(closeAddWishlistModal());
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
