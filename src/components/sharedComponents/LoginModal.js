import React from 'react';
import { Image, Modal, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from '../../styles';

const googleButtonSource = require('../../../assets/google_signin_buttons/2x/btn_google_signin_dark_normal_web.png');

const LoginModal = (props) => {
  return (
    <Modal transparent animationType="fade" visible={props.logInModalVisible} >
      <View style={styles.fadedBackground} >
        <View style={styles.popupModal} >
          <View style={styles.popupModalLeftButtonContainer} >
            <Button transparent onPress={props.closeLoginModal} >
              <Icon name="md-close" style={styles.goldText} />
            </Button>
          </View>
          <View style={styles.popupModalCenterButtonContainer}>
            <View>
              <Button onPress={props.attemptLogin}>
                <Image source={googleButtonSource} />
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { logInModalVisible: state.logInModalVisible };
};

export default connect(mapStateToProps, actions)(LoginModal);
