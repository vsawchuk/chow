import React, { Component } from 'react';
import {
  Text,
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
    this.state = { loggedIn: false };
    this.changeLogInStatus = this.changeLogInStatus.bind(this);
  }
  changeLogInStatus() {
    this.setState((previousState) => {
      return { loggedIn: !previousState.loggedIn };
    });
  }
  render() {
    const headerButtonText = this.state.loggedIn ? 'Log Out' : 'Log In';
    return (
      <Container>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.greyText}>Profile</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.changeLogInStatus}>
              <Text style={styles.greyText}>{ headerButtonText }</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

module.exports = SearchScreen;
