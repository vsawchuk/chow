export const loadWishlists = (wishlists) => {
  return {
    type: 'load_wishlists',
    payload: wishlists,
  };
};
