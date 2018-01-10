export const setCurrentWishlist = (newWishlist) => {
  return {
    type: 'set_current_wishlist',
    payload: newWishlist,
  };
};
