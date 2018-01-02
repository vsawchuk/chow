/*eslint-disable*/
import React from 'react';

import { TabNavigator } from 'react-navigation';
import SearchScreen from './src/SearchScreen';
import ProfileScreen from './src/ProfileScreen';
import WishlistScreen from './src/WishlistScreen';

const GOLD = '#F9A602';

const App = TabNavigator({
    Search: { screen: SearchScreen},
    Wishlists: { screen: WishlistScreen },
    Profile: { screen: ProfileScreen },
}, {
  tabBarOptions: {
    activeTintColor: GOLD,
  },
})

export default App;
