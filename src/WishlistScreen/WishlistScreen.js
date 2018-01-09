import React, { Component } from 'react';
import { Container, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styles from '../styles';
import HeaderWithRightButton from '../sharedComponents/HeaderWithRightButton';
import WishlistList from './WishlistScreenComponents/WishlistList';

class WishlistScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-list-box-outline" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    console.log(this.props);
    const headerButton = (
      <Button transparent>
        <Icon style={styles.greyText} name="ios-add-circle-outline" />
      </Button>
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
  return { wishlists: state.wishlists };
};

export default connect(mapStateToProps, actions)(WishlistScreen);
