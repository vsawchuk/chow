import { displayWishlistModal } from './DisplayWishlistModal';
import { setWishlistModalType } from './SetWishlistModalType';

export const prepWishlistModal = (addOrEdit, editWishlist={}) => {
  return (dispatch) => {
    dispatch(setWishlistModalType(addOrEdit));
    dispatch(displayWishlistModal());
  };
};
