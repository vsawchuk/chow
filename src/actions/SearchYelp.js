import axios from 'axios';
import { YELP_API_KEY } from 'react-native-dotenv';
import { loadSearchResults } from './LoadSearchResults';
import { incrementUserSearchCount } from './IncrementUserSearchCount';

export const searchYelp = (searchTerm, searchLocation) => {
  let requestURL;
  if ((typeof searchLocation) == "string") {
    requestURL = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${searchLocation}&limit=50`;
  } else {
    requestURL = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${searchLocation.latitude}&longitude=${searchLocation.longitude}&limit=50`;
  }
  const config = {
    headers: { Authorization: `Bearer ${YELP_API_KEY}` },
  };
  return (dispatch) => {
    dispatch(incrementUserSearchCount());
    axios.get(requestURL, config)
      .then((response) => {
        dispatch(loadSearchResults(response.data.businesses));
      })
      .catch((error) => {
        console.log(error);
      });

  }
};
