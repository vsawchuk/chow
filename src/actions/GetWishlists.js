import axios from 'axios';
import { loadWishlists } from './LoadWishlists';

export const getWishlists = (userId) => {
  return (dispatch) => {
    axios.get(`/users/${userId}/wishlists`)
      .then((response) => {
        dispatch(loadWishlists(response.data));
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
