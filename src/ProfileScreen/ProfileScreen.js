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
import LoginModal from '../sharedComponents/LoginModal';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-person" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    let headerButton;
    let content;
    if (this.props.loggedIn) {
      headerButton = (
        <Button transparent onPress={() => this.props.logoutActions()}>
          <Text style={styles.greyText}>Log Out</Text>
        </Button>
      );
      content = (
        <UserProfile user={this.props.user} />
      );
    } else {
      headerButton = (
        <Button transparent onPress={this.props.displayLoginModal}>
          <Text style={styles.greyText}>Log In</Text>
        </Button>
      );
    }
    return (
      <Container>
        <HeaderWithRightButton title="Profile" headerButton={headerButton} />
        {content}
        <LoginModal />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  return { loggedIn, user: state.user, logInModalVisible: state.logInModalVisible };
};

export default connect(mapStateToProps, actions)(ProfileScreen);
