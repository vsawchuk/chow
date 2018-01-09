import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { Container, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import Expo from 'expo';
import { GOOGLE_OAUTH_IOS_CLIENT_ID } from 'react-native-dotenv';
import * as actions from '../actions';
import styles from '../styles';
import HeaderWithRightButton from '../sharedComponents/HeaderWithRightButton';
import UserProfile from './ProfileScreenComponents/UserProfile';
import { FAKEUSER_AUTH_RESPONSE } from '../FakeData/FakeUser.js';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-person" style={[{ color: tintColor }]} />
    ),
  }
  constructor() {
    super();
    this.state = {
      logInModalVisible: false,
    };
    this.logInModalVisibility = this.logInModalVisibility.bind(this);
    this.logIn = this.logIn.bind(this);
  }
  logInModalVisibility() {
    this.setState({ logInModalVisible: !this.state.logInModalVisible });
  }
  // TODO: uncomment this version of logIn after development, use real auth
  async logIn() {
    try {
      const result = await Expo.Google.logInAsync({
        iosClientId: GOOGLE_OAUTH_IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
      if (result && result.type === 'success') {
        this.logInModalVisibility();
        this.props.attemptLogin(result);
        return result.accessToken;
      } else {
        throw Error();
      }
    } catch (e) {
      return { error: true };
    }
  }
  // logIn() {
  //   this.props.loginUser(FAKEUSER_AUTH_RESPONSE.user);
  //   this.logInModalVisibility();
  // }
  render() {
    let headerButton;
    let content;
    if (this.props.loggedIn) {
      headerButton = (
        <Button transparent onPress={() => this.props.logoutUser()}>
          <Text style={styles.greyText}>Log Out</Text>
        </Button>
      );
      content = (
        <UserProfile user={this.props.user} />
      );
    } else {
      headerButton = (
        <Button transparent onPress={this.logInModalVisibility}>
          <Text style={styles.greyText}>Log In</Text>
        </Button>
      );
    }
    return (
      <Container>
        <HeaderWithRightButton title='Profile' headerButton={headerButton} />
        {content}
        <Modal transparent animationType="slide" visible={this.state.logInModalVisible} >
          <View style={{ height: 300 }} />
          <View style={[styles.goldBackground, { height: 300, width: 300 }]} >
            <Button style={styles.whiteBackground} onPress={this.logInModalVisibility} >
              <Icon name="ios-arrow-back-outline" style={styles.goldText} />
            </Button>
            <View style={styles.centeredRowContainer}>
              <View>
                <Button onPress={this.logIn}>
                  <Text>Log in with Google</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  return { loggedIn, user: state.user };
};

export default connect(mapStateToProps, actions)(ProfileScreen);
