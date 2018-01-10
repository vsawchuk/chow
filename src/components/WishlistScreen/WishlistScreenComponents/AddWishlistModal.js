import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Form, Item, Label, Input } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from '../../../styles';
import FullScreenModal from '../../sharedComponents/FullScreenModal';

class AddWishlistModal extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = { textInput: '' };
    this.changeTextInput = this.changeTextInput.bind(this);
  }
  changeTextInput(newValue) {
    this.setState({ textInput: newValue });
  }
  render() {
    return (
      <FullScreenModal
        isVisible={this.props.addWishlistModalVisible}
        closeModal={this.props.closeAddWishlistModal}
      >
        <Form>
          <Item floatingLabel last>
            <Label>Wishlist Name</Label>
            <Input onChangeText={this.changeTextInput} />
          </Item>
          <Button
            style={[styles.goldBackground, { alignSelf: 'center' }]}
            onPress={() => this.props.attemptAddWishlist(this.state.textInput, this.props.userId)}
          >
            <Text style={styles.greyText}>Create Wishlist</Text>
          </Button>
        </Form>
      </FullScreenModal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = Object.keys(state.user).length > 0 ? state.user.id : -1;
  return { addWishlistModalVisible: state.addWishlistModalVisible, userId };
};

export default connect(mapStateToProps, actions)(AddWishlistModal);
