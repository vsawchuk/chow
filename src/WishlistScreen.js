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
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wishlist}>
          <TouchableHighlight
            onPress={() => navigate('ScreenTwo')}>
            <Text>Go To Screen Two</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = WishlistScreen;
