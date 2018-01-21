import axios from 'axios';
import { getWishlists } from './GetWishlists';

export const attemptDeleteRestaurantFromWishlist = (restaurantId, wishlistId, userId) => {
  console.log("ATTEMPTINGDELETERESTAURANTFROMWISHLIST");
  return (dispatch) => {
    axios.delete(`/users/${userId}/wishlists/${wishlistId}/delete/${restaurantId}`)
      .then((response) => {
        dispatch(getWishlists(userId));
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
