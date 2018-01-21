import axios from 'axios';
import { getWishlists } from './GetWishlists';
import { setCurrentDisplayWishlist } from './SetCurrentDisplayWishlist'

export const attemptDeleteRestaurantFromWishlist = (restaurantId, wishlist, userId) => {
  const wishlistId = wishlist.id;
  return (dispatch) => {
    axios.delete(`/users/${userId}/wishlists/${wishlistId}/delete/${restaurantId}`)
      .then((response) => {
        newRestaurants = wishlist.restaurants.filter(restaurant => restaurant.id != restaurantId);
        const newWishlist = Object.assign({}, wishlist);
        newWishlist.restaurants = newRestaurants;
        dispatch(setCurrentDisplayWishlist(newWishlist));
        dispatch(getWishlists(userId));
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
