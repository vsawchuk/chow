export const setCurrentSelectedRestaurant = (newRestaurant) => {
  return {
    type: 'set_current_selected_restaurant',
    payload: newRestaurant,
  };
};
