import React, { Component } from 'react';
import { Container, Button, Icon } from 'native-base';
import styles from '../styles';
import HeaderWithRightButton from '../sharedComponents/HeaderWithRightButton';
import WishlistList from './WishlistScreenComponents/WishlistList';

// TODO: remove static wishlists and use a get request to the API to get a user's wishlists
const wishlists = [
  {
    "id": 1,
    "name": "My Wishlist"
  },
  {
    "id": 2,
    "name": "Seattle Wishlist",
  },
  {
    "id": 3,
    "name": "Going Home",
  },
];

class WishlistScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-list-box-outline" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    const headerButton = (
      <Button transparent>
        <Icon style={styles.greyText} name="ios-add-circle-outline" />
      </Button>
    );
    return (
      <Container>
        <HeaderWithRightButton title="Wishlists" headerButton={headerButton} />
        <WishlistList list={wishlists} />
      </Container>
    );
  }
}

module.exports = WishlistScreen;
