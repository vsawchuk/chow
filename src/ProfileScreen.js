import React, { Component } from 'react';
import {
  Text,
  Image,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import styles from './styles';

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
    return (
      <Container>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.greyText}>Profile</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text style={styles.greyText}>Log Out</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

module.exports = SearchScreen;
