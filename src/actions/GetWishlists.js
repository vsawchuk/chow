import axios from 'axios';
import { loadWishlists } from './LoadWishlists';
import { setCurrentWishlist } from './SetCurrentWishlist';

export const getWishlists = (userId) => {
  return (dispatch) => {
    axios.get(`/users/${userId}/wishlists`)
      .then((response) => {
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
