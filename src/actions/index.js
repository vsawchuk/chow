import axios from 'axios';
// API DEV ENV @HOME
// import { HOME_LOCAL_IP } from 'react-native-dotenv';
// axios.defaults.baseURL = `http://${HOME_LOCAL_IP}`;
// console.log(HOME_LOCAL_IP);

// API DEV ENV @ADA
// import { ADA_LOCAL_IP } from 'react-native-dotenv';
// axios.defaults.baseURL = `http://${ADA_LOCAL_IP}`;
// console.log(ADA_LOCAL_IP);

// API PROD ENV
import { PRODUCTION_API } from 'react-native-dotenv';
axios.defaults.baseURL = `http://${PRODUCTION_API}`;

export * from './LogoutActions';
export * from './AttemptLogin';
export * from './GetWishlists';
export * from './CloseLoginModal';
export * from './DisplayLoginModal';
export * from './CloseAddWishlistModal';
export * from './DisplayAddWishlistModal';
export * from './AttemptAddWishlist';
export * from './SetSearchTerm';
export * from './SetSearchLocation';
export * from './SearchYelp';
export * from './LoadSearchResults';
export * from './DisplayAddRestaurantModal';
export * from './CloseAddRestaurantModal';
export * from './SetCurrentWishlist';
export * from './SetupAddRestaurant';
export * from './AddRestaurantToWishlist';
export * from './DisplayWishlist';
