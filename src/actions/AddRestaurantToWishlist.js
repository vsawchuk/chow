import axios from 'axios';
// import { clearCurrentSelectedRestaurant } from './ClearCurrentSelectedRestaurant';
import { closeAddWishlistModal } from './CloseAddWishlistModal';

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
    console.log(`USER: ${userId}\nWISHLIST: ${wishlistId}`)
    axios.post(`/users/${userId}/wishlists/${wishlistId}/add`, requestRestaurant)
      .then((chowResponse) => {
        console.log(chowResponse);
        dispatch(closeAddWishlistModal());
      })
      .catch((error) => {
        console.log('ERROR ADDING RESTAURANT TO WISHLIST');
        console.log(error);
      });
  };
};
