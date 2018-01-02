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
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.profile}>
          <TouchableHighlight
            onPress={() => navigate('ScreenTwo')}>
            <Text>Go To Screen Two</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = SearchScreen;
