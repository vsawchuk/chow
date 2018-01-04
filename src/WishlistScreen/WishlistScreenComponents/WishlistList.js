import React from 'react';
import { List } from 'native-base';
import WishlistListItem from './WishlistListItem';

const WishlistList = ({ list }) => {
  const wishlists = list.map(wishlist => (
    <WishlistListItem
      wishlist={wishlist}
    />
  ));
  return (
    <List>
      {wishlists}
    </List>
  );
};

export default WishlistList;
