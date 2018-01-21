import { displayWishlistModal } from './DisplayWishlistModal';
import { setWishlistModalType } from './SetWishlistModalType';
import { setEditingWishlist } from './SetEditingWishlist';

export const prepWishlistModal = (addOrEdit, editWishlist={}) => {
  return (dispatch) => {
    if (editWishlist != {}) {
      dispatch(setEditingWishlist(editWishlist));
    }
    dispatch(setWishlistModalType(addOrEdit));
    dispatch(displayWishlistModal());
  };
};
