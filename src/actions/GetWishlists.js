import axios from 'axios';
import { loadWishlists } from './LoadWishlists';
import { setCurrentWishlist } from './SetCurrentWishlist';
import { setCurrentDisplayWishlist } from './SetCurrentDisplayWishlist';

export const getWishlists = (userId, updateDisplayId) => {
  return (dispatch) => {
    axios.get(`/users/${userId}/wishlists`)
      .then((response) => {
        if (updateDisplayId != null) {
          dispatch(setCurrentDisplayWishlist(response.data.find(wishlist => wishlist.id == updateDisplayId)))
        }
        dispatch(loadWishlists(response.data));
        if (response.data.length > 0) {
          dispatch(setCurrentWishlist(response.data[0]));
        }
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
