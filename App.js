// import { TabNavigator } from 'react-navigation';
// import SearchScreen from './src/SearchScreen/SearchScreen';
// import ProfileScreen from './src/ProfileScreen/ProfileScreen';
// import WishlistScreen from './src/WishlistScreen/WishlistScreen';
//
// const GOLD = '#F9A602';
//
// const App = TabNavigator({
//   Search: { screen: SearchScreen },
//   Wishlists: { screen: WishlistScreen },
//   Profile: { screen: ProfileScreen },
// }, {
//   tabBarOptions: {
//     activeTintColor: GOLD,
//   },
// });
//
// export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
