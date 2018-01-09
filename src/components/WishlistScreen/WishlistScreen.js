import React, { Component } from 'react';
import { Container, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import HeaderWithRightButton from '../sharedComponents/HeaderWithRightButton';
import WishlistList from './WishlistScreenComponents/WishlistList';
import WishlistScreenHeaderButton from './WishlistScreenComponents/WishlistScreenHeaderButton';

class WishlistScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-list-box-outline" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    const headerButton = (
      <WishlistScreenHeaderButton />
    );
    return (
      <Container>
        <HeaderWithRightButton title="Wishlists" headerButton={headerButton} />
        <WishlistList list={this.props.wishlists} />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  return { loggedIn, wishlists: state.wishlists };
};

export default connect(mapStateToProps, actions)(WishlistScreen);
