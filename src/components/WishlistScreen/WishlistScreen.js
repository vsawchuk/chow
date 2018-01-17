import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import HeaderWithButtons from '../sharedComponents/HeaderWithButtons';
import WishlistList from './WishlistScreenComponents/WishlistList';
import WishlistScreenHeaderButton from './WishlistScreenComponents/WishlistScreenHeaderButton';
import AddWishlistModal from './WishlistScreenComponents/AddWishlistModal';

class WishlistScreen extends Component {
  render() {
    console.log(this.props.wishlists);
    const rightButton = (
      <WishlistScreenHeaderButton />
    );
    return (
      <Container>
        <HeaderWithButtons title="Wishlists" rightButton={rightButton} />
        <Content>
          <WishlistList list={this.props.wishlists} navigation={this.props.navigation} />
          <AddWishlistModal />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { wishlists: state.wishlists };
};

export default connect(mapStateToProps, actions)(WishlistScreen);
