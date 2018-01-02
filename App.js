/*eslint-disable*/
import React from 'react';

import { TabNavigator } from 'react-navigation';
import SearchScreen from './src/SearchScreen';
import ProfileScreen from './src/ProfileScreen';
import WishlistScreen from './src/WishlistScreen';

const App = TabNavigator({
    Search: { screen: SearchScreen},
    Wishlists: { screen: WishlistScreen },
    Profile: { screen: ProfileScreen },
})

export default App;
