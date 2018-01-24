import axios from 'axios';
import { clearCurrentSelectedRestaurant } from './ClearCurrentSelectedRestaurant';
import { closeAddRestaurantModal } from './CloseAddRestaurantModal';
import { getWishlists } from './GetWishlists';
import { setAddRestaurantConfirmation } from './SetAddRestaurantConfirmation';

// TODO: ensure that a single wishlist re-renders with new restaurant after adding

export const addRestaurantToWishlist = (userId, wishlistId, restaurant) => {
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
  return (dispatch) => {
    axios.post(`/users/${userId}/wishlists/${wishlistId}/add`, requestRestaurant)
      .then((chowResponse) => {
        dispatch(setAddRestaurantConfirmation());
        dispatch(getWishlists(userId));
        dispatch(closeAddRestaurantModal());
        dispatch(clearCurrentSelectedRestaurant());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
