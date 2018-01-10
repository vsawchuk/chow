import axios from 'axios';
import { YELP_API_KEY } from 'react-native-dotenv';
import { loadSearchResults } from './LoadSearchResults';

export const searchYelp = (searchTerm, searchLocation) => {
  const requestURL = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${searchLocation}&limit=50`;
  const config = {
    headers: { Authorization: `Bearer ${YELP_API_KEY}` },
  };
  return (dispatch) => {
    axios.get(requestURL, config)
      .then((response) => {
        dispatch(loadSearchResults(response.data.businesses));
      })
      .catch((error) => {
        console.log(error);
      });

  }
};
