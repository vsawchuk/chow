import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WishlistsReducer from './WishlistsReducer';
import LoginModalReducer from './LoginModalReducer';

export default combineReducers({
  user: UserReducer,
  wishlists: WishlistsReducer,
  logInModalVisible: LoginModalReducer,
});
