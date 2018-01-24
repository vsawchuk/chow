import { displayAddRestaurantModal } from './DisplayAddRestaurantModal';
import { setCurrentSelectedRestaurant } from './SetCurrentSelectedRestaurant';
import { addRestaurantToWishlist } from './AddRestaurantToWishlist';

export const setupAddRestaurant = (restaurant, wishlists, userId, currentDisplayWishlistId) => {
  return (dispatch) => {
    dispatch(setCurrentSelectedRestaurant(restaurant));
    if (wishlists.length == 1) {
      dispatch(addRestaurantToWishlist(userId, wishlists[0].id, restaurant, currentDisplayWishlistId));
    } else {
      dispatch(displayAddRestaurantModal());
    }
  };
};
