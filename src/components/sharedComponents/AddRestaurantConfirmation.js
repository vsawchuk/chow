import React, { Component } from 'react';
import { Image, Modal, Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from '../../styles';

class AddRestaurantConfirmation extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.addRestaurantConfirmation) {
      setTimeout(nextProps.clearAddRestaurantConfirmation, 1000);
    }
  }
  render() {
    return (
      <Modal transparent animationType="fade" visible={this.props.addRestaurantConfirmation} >
        <View style={styles.fadedBackground} >
          <Button style={styles.confirmationButton} onPress={() => this.props.clearAddRestaurantConfirmation()}>
            <Icon active name="ios-checkmark" style={styles.confirmationIcon} />
          </Button>
        </View>
      </Modal>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { addRestaurantConfirmation: state.addRestaurantConfirmation };
};

export default connect(mapStateToProps, actions)(AddRestaurantConfirmation);
