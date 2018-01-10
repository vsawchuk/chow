import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WishlistsReducer from './WishlistsReducer';
import LoginModalReducer from './LoginModalReducer';
import AddWishlistModalReducer from './AddWishlistModalReducer';
import SearchResultsReducer from './SearchResultsReducer';
import SearchLocationReducer from './SearchLocationReducer';
import SearchTermReducer from './SearchTermReducer';

export default combineReducers({
  user: UserReducer,
  wishlists: WishlistsReducer,
  logInModalVisible: LoginModalReducer,
  addWishlistModalVisible: AddWishlistModalReducer,
  searchResults: SearchResultsReducer,
  searchTerm: SearchTermReducer,
  searchLocation: SearchLocationReducer,
});
