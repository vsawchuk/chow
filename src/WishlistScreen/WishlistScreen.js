import React, { Component } from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon } from 'native-base';
import styles from '../styles';

class WishlistScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-list-box-outline' style={[{ color: tintColor }]} />
    )
  }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.greyText}>Wishlists</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.greyText} name="ios-add-circle-outline" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

module.exports = WishlistScreen;
