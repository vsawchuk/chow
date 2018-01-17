import { setCurrentDisplayWishlist } from './SetCurrentDisplayWishlist';

export const displayWishlist = (wishlist, navigation) => {
  return (dispatch) => {
    dispatch(setCurrentDisplayWishlist(wishlist));
    navigation.navigate('Wishlist');
  };
};
