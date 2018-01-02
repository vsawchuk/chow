/*eslint-disable*/
import React from 'react';

import { TabNavigator } from 'react-navigation';
import SearchScreen from './src/SearchScreen';
import ProfileScreen from './src/ProfileScreen';
import WishlistScreen from './src/WishlistScreen';

const App = TabNavigator({
    SearchScreen: { screen: SearchScreen},
    WishlistScreen: { screen: WishlistScreen },
    ProfileScreen: { screen: ProfileScreen },
})

export default App;
