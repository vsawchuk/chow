import React from 'react';
import { Text, View } from 'react-native';
import { Form, Item, Label, Picker, Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from '../../../styles';

const AddToWishlistForm = (props) => {
  const {
    currentWishlist,
    setCurrentWishlist,
    userId,
    currentSelectedRestaurant,
    addRestaurantToWishlist,
    currentDisplayWishlistId
  } = props;
  return (
    <Form>
      <Item last style={styles.linkBlue}>
        <Label>Select a Wishlist</Label>
        <Picker
          textStyle={styles.linkBlue}
          selectedValue={currentWishlist}
          onValueChange={setCurrentWishlist}
        >
          {props.wishlists.map(wishlist => (
            <Picker.Item key={wishlist.id} label={wishlist.name} value={wishlist} />
          ))}
        </Picker>
      </Item>
      <View height={10} />
      <Button style={[styles.goldBackground, { alignSelf: 'center' }]} onPress={() => addRestaurantToWishlist(userId, currentWishlist.id, currentSelectedRestaurant, currentDisplayWishlistId)}>
        <Text style={styles.greyText}>Add to Wishlist</Text>
      </Button>
    </Form>
  );
};

const mapStateToProps = (state, ownProps) => {
  const userId = (Object.keys(state.user).length > 0) ? state.user.id : -1;
  const currentDisplayWishlistId = Object.keys(state.currentDisplayWishlist).length > 0 ? state.currentDisplayWishlist.id : null;
  return {
    currentSelectedRestaurant: state.currentSelectedRestaurant,
    currentWishlist: state.currentWishlist,
    userId,
    wishlists: state.wishlists,
    currentDisplayWishlistId,
  };
};

export default connect(mapStateToProps, actions)(AddToWishlistForm);
