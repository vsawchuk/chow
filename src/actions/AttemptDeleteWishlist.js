import axios from 'axios';
import { getWishlists } from './GetWishlists';

export const attemptDeleteWishlist = (wishlistId, userId) => {
  return (dispatch) => {
    axios.delete(`/users/${userId}/wishlists/${wishlistId}`)
      .then((response) => {
        dispatch(getWishlists(userId));
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
