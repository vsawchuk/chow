import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import WishlistsReducer from './WishlistsReducer';

export default combineReducers({
  user: UserReducer,
  wishlists: WishlistsReducer,
});
