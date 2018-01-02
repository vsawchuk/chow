import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './styles.js';

class SearchScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/profile-icon.png')}
        style={styles.navIcon}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.profile}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

module.exports = SearchScreen;
