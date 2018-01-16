import React from 'react';
import { Text } from 'react-native';
import { Form, Item, Label, Picker, Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import styles from '../../../styles';

const AddToWishlistForm = (props) => {
  return (
    <Form>
      <Item last>
        <Label>Select a Wishlist</Label>
        <Picker
          selectedValue={props.currentWishlist}
          onValueChange={props.setCurrentWishlist}
        >
          {props.wishlists.map(wishlist => (
            <Picker.Item key={wishlist.id} label={wishlist.name} value={wishlist} />
          ))}
        </Picker>
      </Item>
      <Button style={[styles.goldBackground, { alignSelf: 'center' }]} onPress={() => props.addRestaurantToWishlist(props.userId, props.currentWishlist.id, props.currentSelectedRestaurant)}>
        <Text style={styles.greyText}>Add to Wishlist</Text>
      </Button>
    </Form>
  );
};

const mapStateToProps = (state, ownProps) => {
  const userId = (Object.keys(state.user).length > 0) ? state.user.id : -1;
  return {
    currentSelectedRestaurant: state.currentSelectedRestaurant,
    currentWishlist: state.currentWishlist,
    userId,
    wishlists: state.wishlists,
  };
};

export default connect(mapStateToProps, actions)(AddToWishlistForm);
