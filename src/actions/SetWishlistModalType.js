export const setWishlistModalType = (addOrEdit) => {
  return {
    type: 'set_wishlist_modal_type',
    payload: addOrEdit,
  };
};
