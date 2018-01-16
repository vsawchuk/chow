import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import HeaderWithRightButton from '../sharedComponents/HeaderWithRightButton';
import WishlistList from './WishlistScreenComponents/WishlistList';
import WishlistScreenHeaderButton from './WishlistScreenComponents/WishlistScreenHeaderButton';
import AddWishlistModal from './WishlistScreenComponents/AddWishlistModal';

class WishlistScreen extends Component {
  render() {
    const headerButton = (
      <WishlistScreenHeaderButton />
    );
    return (
      <Container>
        <HeaderWithRightButton title="Wishlists" headerButton={headerButton} />
        <WishlistList list={this.props.wishlists} navigation={this.props.navigation} />
        <AddWishlistModal />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { wishlists: state.wishlists };
};

export default connect(mapStateToProps, actions)(WishlistScreen);
