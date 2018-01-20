import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Form, Item, Label, Input } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from '../../../styles';
import FullScreenModal from '../../sharedComponents/FullScreenModal';

class WishlistModal extends Component {
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
    let buttonText;
    let onPress;
    if (this.props.addOrEdit == "add") {
      buttonText = "Create";
      onPress = () => this.props.attemptAddWishlist(this.state.textInput, this.props.userId);
    } else {
      buttonText = "Edit";
      onPress = () => console.log("EDITING");
    }
    return (
      <FullScreenModal
        isVisible={this.props.wishlistModalVisible}
        closeModal={this.props.closeWishlistModal}
      >
        <Form>
          <Item floatingLabel last>
            <Label>Wishlist Name</Label>
            <Input onChangeText={this.changeTextInput} />
          </Item>
          <Button
            style={[styles.goldBackground, { alignSelf: 'center' }]}
            onPress={onPress}
          >
            <Text style={styles.greyText}>{buttonText} Wishlist</Text>
          </Button>
        </Form>
      </FullScreenModal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = Object.keys(state.user).length > 0 ? state.user.id : -1;
  return { wishlistModalVisible: state.wishlistModalVisible, userId, addOrEdit: state.wishlistModalType };
};

export default connect(mapStateToProps, actions)(WishlistModal);
