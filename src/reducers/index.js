import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WishlistsReducer from './WishlistsReducer';
import CurrentWishlistReducer from './CurrentWishlistReducer';
import currentSelectedRestaurantReducer from './CurrentSelectedRestaurantReducer';
import LoginModalReducer from './LoginModalReducer';
import AddWishlistModalReducer from './AddWishlistModalReducer';
import AddRestaurantModalReducer from './AddRestaurantModalReducer';
import SearchResultsReducer from './SearchResultsReducer';
import SearchLocationReducer from './SearchLocationReducer';
import SearchTermReducer from './SearchTermReducer';

export default combineReducers({
  user: UserReducer,
  wishlists: WishlistsReducer,
  currentWishlist: CurrentWishlistReducer,
  currentSelectedRestaurant: currentSelectedRestaurantReducer,
  logInModalVisible: LoginModalReducer,
  addWishlistModalVisible: AddWishlistModalReducer,
  addRestaurantModalVisible: AddRestaurantModalReducer,
  searchResults: SearchResultsReducer,
  searchTerm: SearchTermReducer,
  searchLocation: SearchLocationReducer,
});
