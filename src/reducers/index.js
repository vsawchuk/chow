import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WishlistsReducer from './WishlistsReducer';
import CurrentWishlistReducer from './CurrentWishlistReducer';
import CurrentDisplayWishlistReducer from './CurrentDisplayWishlistReducer';
import CurrentEditWishlistReducer from './CurrentEditWishlistReducer';
import currentSelectedRestaurantReducer from './CurrentSelectedRestaurantReducer';
import LoginModalReducer from './LoginModalReducer';
import WishlistModalReducer from './WishlistModalReducer';
import WishlistModalTypeReducer from './WishlistModalTypeReducer';
import AddRestaurantModalReducer from './AddRestaurantModalReducer';
import SearchListViewReducer from './SearchListViewReducer';
import SearchResultsReducer from './SearchResultsReducer';
import SearchLocationReducer from './SearchLocationReducer';
import SearchTermReducer from './SearchTermReducer';
import UserLocationReducer from './UserLocationReducer';
import UserSearchCountReducer from './UserSearchCountReducer';
import LoadingReducer from './LoadingReducer';
import AddRestaurantConfirmationReducer from './AddRestaurantConfirmationReducer';

export default combineReducers({
  user: UserReducer,
  wishlists: WishlistsReducer,
  currentWishlist: CurrentWishlistReducer,
  currentDisplayWishlist: CurrentDisplayWishlistReducer,
  currentEditWishlist: CurrentEditWishlistReducer,
  currentSelectedRestaurant: currentSelectedRestaurantReducer,
  logInModalVisible: LoginModalReducer,
  wishlistModalType: WishlistModalTypeReducer,
  wishlistModalVisible: WishlistModalReducer,
  addRestaurantModalVisible: AddRestaurantModalReducer,
  searchListView: SearchListViewReducer,
  searchResults: SearchResultsReducer,
  searchTerm: SearchTermReducer,
  searchLocation: SearchLocationReducer,
  userLocation: UserLocationReducer,
  userSearchCount: UserSearchCountReducer,
  loading: LoadingReducer,
  addRestaurantConfirmation: AddRestaurantConfirmationReducer,
});
