import React from 'react';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from '../../../styles';

const WishlistScreenHeaderButton = (props) => {
  const onPress = props.loggedIn ? () => props.prepWishlistModal("add") : props.displayLoginModal;
  return (
    <Button transparent>
      <Icon style={styles.greyText} name="ios-add-circle-outline" onPress={onPress} />
    </Button>
  );
};

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  return { loggedIn };
};

export default connect(mapStateToProps, actions)(WishlistScreenHeaderButton);
