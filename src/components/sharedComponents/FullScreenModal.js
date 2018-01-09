import React from 'react';
import { Modal, View } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from '../../styles';

const FullScreenModal = ({ isVisible, closeModal, children }) => (
  <Modal transparent={false} animationType="slide" visible={isVisible} style={styles.greyBackground} >
    <View style={{ height: 40 }} />
    <Button style={styles.whiteBackground} onPress={closeModal} >
      <Icon name="ios-arrow-back-outline" style={styles.goldText} />
    </Button>
    {children}
  </Modal>
);

export default FullScreenModal;
