import axios from 'axios';
import { LOCAL_IP } from 'react-native-dotenv';

axios.defaults.baseURL = `http://${LOCAL_IP}`;

export * from './LogoutActions';
export * from './AttemptLogin';
export * from './GetWishlists';
export * from './CloseLoginModal';
export * from './DisplayLoginModal';
export * from './CloseAddWishlistModal';
export * from './DisplayAddWishlistModal';
export * from './AttemptAddWishlist';
