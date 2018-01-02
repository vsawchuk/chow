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
        source={require('../images/search-icon.png')}
        style={styles.navIcon}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.search}>
        <Text>Search Screen</Text>
      </View>
    );
  }
}

module.exports = SearchScreen;
