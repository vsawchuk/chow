import axios from 'axios';
import { clearCurrentSelectedRestaurant } from './ClearCurrentSelectedRestaurant';
import { closeAddRestaurantModal } from './CloseAddRestaurantModal';

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
  };
  return (dispatch) => {
    axios.post(`/users/${userId}/wishlists/${wishlistId}/add`, requestRestaurant)
      .then((chowResponse) => {
        console.log(chowResponse);
        dispatch(closeAddRestaurantModal());
        dispatch(clearCurrentSelectedRestaurant());
      })
      .catch((error) => {
        console.log('ERROR ADDING RESTAURANT TO WISHLIST');
        console.log(error);
      });
  };
};
