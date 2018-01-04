import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { Container, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styles from '../styles';
import HeaderWithRightButton from '../sharedComponents/HeaderWithRightButton';

const FAKEUSER = {
  id: 1,
  username: 'victoria',
}

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
  logIn() {
    this.props.loginUser(FAKEUSER);
    this.logInModalVisibility();
  }
  render() {
    let headerButton;
    if (this.props.loggedIn) {
      headerButton = (
        <Button transparent onPress={() => this.props.logoutUser()}>
          <Text style={styles.greyText}>Log Out</Text>
        </Button>
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
  return { loggedIn };
};

export default connect(mapStateToProps, actions)(ProfileScreen);
