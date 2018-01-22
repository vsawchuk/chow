export const setUserLocation = (userLocation) => {
  return {
    type: 'set_user_location',
    payload: userLocation,
  };
};
