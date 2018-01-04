import { combineReducers } from 'redux';
import WishlistsReducer from './WishlistsReducer'

export default combineReducers({
  wishlists: WishlistsReducer,
});
