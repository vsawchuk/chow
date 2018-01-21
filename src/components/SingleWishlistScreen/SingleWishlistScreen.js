import React from 'react';
import { ListView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, List } from 'native-base';
import RestaurantListItem from '../sharedComponents/RestaurantListItem';
import HeaderWithButtons from '../sharedComponents/HeaderWithButtons';
import SwipableRestaurantList from './SwipableRestaurantList';
import * as actions from '../../actions';
import styles from '../../styles';

// TODO: cause to re-render after a restuarant has been deleted

const SingleWishlistScreen = (props) => {
  const leftButton = (
    <Button transparent>
      <Icon
        style={styles.greyText}
        name="ios-arrow-back-outline"
        onPress={() => props.navigation.goBack()}
      />
    </Button>
  );
  return (
    <Container style={styles.whiteBackground}>
      <HeaderWithButtons title={props.wishlist.name} leftButton={leftButton} />
      <Content>
        <SwipableRestaurantList wishlist={props.wishlist} />
      </Content>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { wishlist: state.currentDisplayWishlist, restaurants: state.currentDisplayWishlist.restuarants };
};

export default connect(mapStateToProps, actions)(SingleWishlistScreen);
