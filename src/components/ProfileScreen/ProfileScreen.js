import React, { Component } from 'react';
import { Container, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import HeaderWithRightButton from '../sharedComponents/HeaderWithRightButton';
import UserProfile from './ProfileScreenComponents/UserProfile';
import ProfileHeaderButton from './ProfileScreenComponents/ProfileHeaderButton';
import LoginModal from '../sharedComponents/LoginModal';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-person" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    const headerButton = (
      <ProfileHeaderButton />
    );
    return (
      <Container>
        <HeaderWithRightButton title="Profile" headerButton={headerButton} />
        <UserProfile user={this.props.user} />
        <LoginModal />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  return { loggedIn, user: state.user, logInModalVisible: state.logInModalVisible };
};

export default connect(mapStateToProps, actions)(ProfileScreen);
