import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import styles from './styles.js';

const GOLD = '#F9A602';
const GREY = '#F3F2E9';
const DARKBLUE = '#2F3553';

class SearchScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../images/profile-icon.png')}
        style={styles.navIcon}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.profileHeader}>
          <View style={styles.flexContainer}/>
          <View style={styles.flexContainer}>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
          <View style={styles.flexContainer}>
          // TODO: style button to be completely inline with title
            <Button title="Log Out" color={GREY}/>
          </View>
        </View>
        <View style={styles.profile}>
          <Text>Profile Screen</Text>
        </View>
      </View>
    );
  }
}

module.exports = SearchScreen;
