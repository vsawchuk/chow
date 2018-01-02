import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './styles.js';

class WishlistScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/wishlist-icon.png')}
        style={styles.navIcon}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wishlist}>
        <Text>Wishlist Screen</Text>
      </View>
    );
  }
}

module.exports = WishlistScreen;
