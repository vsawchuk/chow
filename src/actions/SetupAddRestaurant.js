import { displayAddRestaurantModal } from './DisplayAddRestaurantModal';
import { setCurrentSelectedRestaurant } from './SetCurrentSelectedRestaurant';

export const setupAddRestaurant = (restaurant) => {
  console.log(restaurant);
  return (dispatch) => {
    dispatch(setCurrentSelectedRestaurant(restaurant));
    dispatch(displayAddRestaurantModal());
  };
};
