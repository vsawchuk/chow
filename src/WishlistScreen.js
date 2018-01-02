import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon } from 'native-base';
import styles from './styles';

class WishlistScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/wishlist-icon.png')}
        style={styles.navIcon}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title style={styles.greyText}>Wishlists</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.greyText} name="ios-add" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

module.exports = WishlistScreen;
