import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from '../../../styles';

const ProfileHeaderButton = (props) => {
  console.log(props);
  let text;
  let onPress;
  if (props.loggedIn) {
    text = 'Log Out';
    onPress = props.logoutActions;
  } else {
    text = 'Log In';
    onPress = props.displayLoginModal;
  }
  return (
    <Button transparent onPress={onPress}>
      <Text style={styles.greyText}>{text}</Text>
    </Button>
  );
};

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  return { loggedIn };
};

export default connect(mapStateToProps, actions)(ProfileHeaderButton);
