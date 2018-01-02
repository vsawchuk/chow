import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import styles from './styles.js';

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
            <Button style={styles.profileHeaderButton} title="Log Out"/>
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
