import React from 'react';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import SearchScreen from '../components/SearchScreen/SearchScreen';
import ProfileScreen from '../components/ProfileScreen/ProfileScreen';
import WishlistNavigator from './WishlistNavigator';

const GOLD = '#F9A602';

const AppNavigator = TabNavigator({
  Search: { screen: SearchScreen },
  Wishlists: {
    screen: WishlistNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-list-box-outline" style={[{ color: tintColor }]} />
      ),
    },
  },
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
