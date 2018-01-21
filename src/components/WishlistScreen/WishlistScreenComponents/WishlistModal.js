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
    this.state = {
      textInput: '',
      buttonText: '',
      type: '',
    };
    this.changeTextInput = this.changeTextInput.bind(this);
  }
  changeTextInput(newValue) {
    this.setState({ textInput: newValue });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.addOrEdit == "add") {
      this.setState({
        buttonText: "Create",
        type: "add",
        onPress: () => nextProps.attemptAddWishlist(this.state.textInput, nextProps.userId),
        textInput: '',
      })
    } else {
      this.setState({
        buttonText: "Edit",
        type: "edit",
        onPress: () => nextProps.attemptEditWishlist(this.state.textInput, nextProps.currentEditWishlist.id, nextProps.userId),
        textInput: nextProps.currentEditWishlist.name,
      })
    }
  }
  render() {
    return (
      <FullScreenModal
        isVisible={this.props.wishlistModalVisible}
        closeModal={this.props.closeWishlistModal}
      >
        <Form>
          <Item floatingLabel last>
            <Label>Wishlist Name</Label>
            <Input onChangeText={this.changeTextInput} value={this.state.textInput} />
          </Item>
          <Button
            style={[styles.goldBackground, { alignSelf: 'center' }]}
            onPress={this.state.onPress}
          >
            <Text style={styles.greyText}>{this.state.buttonText} Wishlist</Text>
          </Button>
        </Form>
      </FullScreenModal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = Object.keys(state.user).length > 0 ? state.user.id : -1;
  return { wishlistModalVisible: state.wishlistModalVisible, userId, addOrEdit: state.wishlistModalType, currentEditWishlist: state.currentEditWishlist };
};

export default connect(mapStateToProps, actions)(WishlistModal);
