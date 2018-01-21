import axios from 'axios';
import { getWishlists } from './GetWishlists';
import { closeWishlistModal } from './CloseWishlistModal';

export const attemptEditWishlist = (wishlistName, wishlistId, userId) => {
  console.log('ATTEMPTINGEDITWISHLIST');
  console.log(wishlistName);
  console.log(wishlistId);
  console.log(userId);
  return (dispatch) => {
    axios.put(`/users/${userId}/wishlists/${wishlistId}?name=${wishlistName}`)
      .then((response) => {
        console.log(response);
        dispatch(getWishlists(userId));
        dispatch(closeWishlistModal());
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
