import React from 'react';
import { List } from 'native-base';
import WishlistListItem from './WishlistListItem';

const WishlistList = ({ list, navigation }) => {
  const wishlists = list.map(wishlist => (
    <WishlistListItem
      key={wishlist.id}
      wishlist={wishlist}
      navigation={navigation}
    />
  ));
  return (
    <List>
      {wishlists}
    </List>
  );
};

export default WishlistList;
