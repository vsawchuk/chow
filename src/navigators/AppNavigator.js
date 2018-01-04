import React from 'react';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import SearchScreen from '../SearchScreen/SearchScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import WishlistScreen from '../WishlistScreen/WishlistScreen';

const GOLD = '#F9A602';

const AppNavigator = TabNavigator({
  Search: { screen: SearchScreen },
  Wishlists: { screen: WishlistScreen },
  Profile: { screen: ProfileScreen },
}, {
  tabBarOptions: {
    activeTintColor: GOLD,
  },
});

const AppWithNavigationState = ({ state, dispatch }) => (
  <AppNavigator state={state} dispatch={dispatch} />
);

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(AppWithNavigationState);
