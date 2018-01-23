import React, { Component } from 'react';
import { Container, Icon } from 'native-base';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import * as actions from '../../actions';
import HeaderWithButtons from '../sharedComponents/HeaderWithButtons';
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
    let content;
    return (
      <Container>
        <HeaderWithButtons title="Profile" rightButton={<ProfileHeaderButton />} />
        <UserProfile user={this.props.user} />
        <LoginModal />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  return { loggedIn, user: state.user, logInModalVisible: state.logInModalVisible, loading: state.loading };
};

export default connect(mapStateToProps, actions)(ProfileScreen);
