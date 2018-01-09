import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from '../styles';

const LoginModal = ({ loginModalVisible, onPress }) => (
  <Modal transparent animationType="slide" visible={logInModalVisible} >
    <View style={{ height: 300 }} />
    <View style={[styles.goldBackground, { height: 300, width: 300 }]} >
      <Button style={styles.whiteBackground} onPress={this.logInModalVisibility} >
        <Icon name="ios-arrow-back-outline" style={styles.goldText} />
      </Button>
      <View style={styles.centeredRowContainer}>
        <View>
          <Button onPress={this.logIn}>
            <Text>Log in with Google</Text>
          </Button>
        </View>
      </View>
    </View>
  </Modal>
);

export default LoginModal;
