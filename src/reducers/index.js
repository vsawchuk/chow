import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WishlistsReducer from './WishlistsReducer';
import LoginModalReducer from './LoginModalReducer';
import AddWishlistModalReducer from './AddWishlistModalReducer';

export default combineReducers({
  user: UserReducer,
  wishlists: WishlistsReducer,
  logInModalVisible: LoginModalReducer,
  addWishlistModalVisible: AddWishlistModalReducer,
});
