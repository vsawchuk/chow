import React from 'react';
import { StackNavigator } from 'react-navigation';
import WishlistScreen from '../components/WishlistScreen/WishlistScreen';
import SingleWishlistScreen from '../components/SingleWishlistScreen/SingleWishlistScreen';

const GOLD = '#F9A602';

const WishlistNavigator = StackNavigator({
  Wishlists: {
    screen: WishlistScreen,
    navigationOptions: { header: null },
  },
  Wishlist: { screen: SingleWishlistScreen },
});

export default WishlistNavigator;
