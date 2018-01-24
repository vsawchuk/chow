import React, { Component } from 'react';
import { ListView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, List } from 'native-base';
import { NavigationActions } from 'react-navigation';
import RestaurantListItem from '../sharedComponents/RestaurantListItem';
import HeaderWithButtons from '../sharedComponents/HeaderWithButtons';
import SwipableRestaurantList from './SwipableRestaurantList';
import * as actions from '../../actions';
import styles from '../../styles';

class SingleWishlistScreen extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      nextProps.navigation.goBack();
      nextProps.screenProps.rootNavigation.navigate('Profile');
    }
  }
  render() {
    const leftButton = (
      <Button transparent>
        <Icon
          style={styles.greyText}
          name="ios-arrow-back-outline"
          onPress={() => this.props.navigation.goBack()}
        />
      </Button>
    );
    return (
      <Container style={styles.whiteBackground}>
        <HeaderWithButtons title={this.props.wishlist.name} leftButton={leftButton} />
        <Content>
          <SwipableRestaurantList wishlist={this.props.wishlist} />
        </Content>
      </Container>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  return { wishlist: state.currentDisplayWishlist, restaurants: state.currentDisplayWishlist.restuarants, loggedIn };
}

export default connect(mapStateToProps, actions)(SingleWishlistScreen);
