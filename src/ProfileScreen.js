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
