import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from '../../styles';

const LoginModal = (props) => {
  return (
    <Modal transparent animationType="slide" visible={props.logInModalVisible} >
      <View style={{ height: 300 }} />
      <View style={[styles.goldBackground, { height: 300, width: 300 }]} >
        <Button style={styles.whiteBackground} onPress={props.closeLoginModal} >
          <Icon name="ios-arrow-back-outline" style={styles.goldText} />
        </Button>
        <View style={styles.centeredRowContainer}>
          <View>
            <Button onPress={props.attemptLogin}>
              <Text>Log in with Google</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// export default LoginModal;
const mapStateToProps = (state, ownProps) => {
  return { logInModalVisible: state.logInModalVisible };
};

export default connect(mapStateToProps, actions)(LoginModal);
