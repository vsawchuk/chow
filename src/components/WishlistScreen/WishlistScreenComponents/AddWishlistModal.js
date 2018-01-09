import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from '../../../styles';
import FullScreenModal from '../../sharedComponents/FullScreenModal';

const AddWishlistModal = (props) => {
  return (
    <FullScreenModal
      isVisible={props.addWishlistModalVisible}
      closeModal={props.closeAddWishlistModal}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { addWishlistModalVisible: state.addWishlistModalVisible };
};

export default connect(mapStateToProps, actions)(AddWishlistModal);
