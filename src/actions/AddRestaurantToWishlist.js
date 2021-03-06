import axios from 'axios';
import { clearCurrentSelectedRestaurant } from './ClearCurrentSelectedRestaurant';
import { closeAddRestaurantModal } from './CloseAddRestaurantModal';
import { getWishlists } from './GetWishlists';
import { setAddRestaurantConfirmation } from './SetAddRestaurantConfirmation';

export const addRestaurantToWishlist = (userId, wishlistId, restaurant, currentDisplayWishlistId) => {
  const requestRestaurant = {
    name: restaurant.name,
    imageUrl: restaurant.image_url,
    url: restaurant.url,
    rating: restaurant.rating,
    reviewCount: restaurant.review_count,
    price: restaurant.price,
    yelpId: restaurant.id,
    displayAddress: restaurant.location.display_address,
    latitude: restaurant.coordinates.latitude,
    longitude: restaurant.coordinates.longitude,
  };
  const updateDisplayId = (wishlistId == currentDisplayWishlistId) ? wishlistId : null;
  return (dispatch) => {
    axios.post(`/users/${userId}/wishlists/${wishlistId}/add`, requestRestaurant)
      .then((chowResponse) => {
        dispatch(setAddRestaurantConfirmation());
        dispatch(getWishlists(userId, updateDisplayId));
        dispatch(closeAddRestaurantModal());
        dispatch(clearCurrentSelectedRestaurant());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
