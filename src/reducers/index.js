import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WishlistsReducer from './WishlistsReducer';
import CurrentWishlistReducer from './CurrentWishlistReducer';
import CurrentDisplayWishlistReducer from './CurrentDisplayWishlistReducer';
import currentSelectedRestaurantReducer from './CurrentSelectedRestaurantReducer';
import LoginModalReducer from './LoginModalReducer';
import WishlistModalReducer from './WishlistModalReducer';
import WishlistModalTypeReducer from './WishlistModalTypeReducer';
import AddRestaurantModalReducer from './AddRestaurantModalReducer';
import SearchResultsReducer from './SearchResultsReducer';
import SearchLocationReducer from './SearchLocationReducer';
import SearchTermReducer from './SearchTermReducer';

export default combineReducers({
  user: UserReducer,
  wishlists: WishlistsReducer,
  currentWishlist: CurrentWishlistReducer,
  currentDisplayWishlist: CurrentDisplayWishlistReducer,
  currentSelectedRestaurant: currentSelectedRestaurantReducer,
  logInModalVisible: LoginModalReducer,
  wishlistModalType: WishlistModalTypeReducer,
  wishlistModalVisible: WishlistModalReducer,
  addRestaurantModalVisible: AddRestaurantModalReducer,
  searchResults: SearchResultsReducer,
  searchTerm: SearchTermReducer,
  searchLocation: SearchLocationReducer,
});
