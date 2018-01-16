import { displayAddRestaurantModal } from './DisplayAddRestaurantModal';
import { setCurrentSelectedRestaurant } from './SetCurrentSelectedRestaurant';

export const setupAddRestaurant = (restaurant) => {
  return (dispatch) => {
    dispatch(setCurrentSelectedRestaurant(restaurant));
    dispatch(displayAddRestaurantModal());
  };
};
