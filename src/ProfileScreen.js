import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon } from 'native-base';
import styles from './styles';

class SearchScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-person" style={[{ color: tintColor }]} />
    ),
  }
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      logInModalVisible: false,
    };
    this.changeLogInStatus = this.changeLogInStatus.bind(this);
    this.logInModalVisibility = this.logInModalVisibility.bind(this);
  }
  changeLogInStatus() {
    this.setState((previousState) => {
      return { loggedIn: !previousState.loggedIn };
    });
  }
  logInModalVisibility() {
    this.setState({ logInModalVisible: !this.state.logInModalVisible });
  }
  render() {
    let headerButton;
    if (this.state.loggedIn) {
      headerButton = (
        <Button transparent onPress={this.changeLogInStatus}>
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
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.greyText}>Profile</Title>
          </Body>
          <Right>
            {headerButton}
          </Right>
        </Header>
        <Modal transparent={false} animationType="slide" visible={this.state.logInModalVisible} style={styles.greyBackground} >
          <View style={{ height: 40 }} />
          <Button style={styles.whiteBackground} onPress={this.logInModalVisibility} >
            <Icon name="ios-arrow-back-outline" style={styles.goldText} />
          </Button>
        </Modal>
      </Container>
    );
  }
}

module.exports = SearchScreen;
