import React, { Component } from 'react';
import { Container, Button, Icon } from 'native-base';
import styles from '../styles';
import HeaderWithRightButton from '../sharedComponents/HeaderWithRightButton';

class WishlistScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-list-box-outline" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    const button = (
      <Button transparent>
        <Icon style={styles.greyText} name="ios-add-circle-outline" />
      </Button>
    );
    return (
      <Container>
        <HeaderWithRightButton title="Wishlists" headerButton={button} />
      </Container>
    );
  }
}

module.exports = WishlistScreen;
