import { setUserLocation } from './SetUserLocation';

async function getLocationAsync() {
  const { Location, Permissions } = Expo;
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    return Location.getCurrentPositionAsync({enableHighAccuracy: true});
  } else {
    throw new Error('Location permission not granted');
  }
}

export const getUserLocation = () => {
  return (dispatch) => {
    getLocationAsync()
      .then((response) => {
        dispatch(setUserLocation(response.coords));
      })
      .catch((error) => {
        dispatch(setUserLocation({}));
      });
  };
};
