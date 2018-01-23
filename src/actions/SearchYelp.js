import axios from 'axios';
import { YELP_API_KEY } from 'react-native-dotenv';
import { loadSearchResults } from './LoadSearchResults';
import { incrementUserSearchCount } from './IncrementUserSearchCount';
import { setLoading } from './SetLoading';
import { clearLoading } from './ClearLoading';

export const searchYelp = (searchTerm, searchLocation, userLocation) => {
  let requestURL;
  if (searchLocation.length > 0) {
    requestURL = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${searchLocation}&limit=50`;
  } else {
    requestURL = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&limit=50`;
  }
  const config = {
    headers: { Authorization: `Bearer ${YELP_API_KEY}` },
  };
  return (dispatch) => {
    dispatch(incrementUserSearchCount());
    dispatch(setLoading());
    axios.get(requestURL, config)
      .then((response) => {
        dispatch(clearLoading());
        dispatch(loadSearchResults(response.data.businesses));
      })
      .catch((error) => {
        dispatch(clearLoading());
        console.log(error);
      });
  }
};
