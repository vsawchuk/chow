import React from 'react';
import { Text } from 'react-native';
import { Form, Item, Label, Picker, Button } from 'native-base';
import styles from '../../styles';

const AddToWishlistForm = ({ currentWishlist, wishlists, onValueChange }) => {
  return (
    <Form>
      <Item last>
        <Label>Select a Wishlist</Label>
        <Picker
          selectedValue={currentWishlist}
          onValueChange={onValueChange}
        >
          {wishlists.map((wishlist, index) => (
            <Picker.Item key={index} label={wishlist} value={wishlist} />
          ))}
        </Picker>
      </Item>
      <Button style={[styles.goldBackground, { alignSelf: 'center' }]}>
        <Text style={styles.greyText}>Add to Wishlist</Text>
      </Button>
    </Form>
  );
};

export default AddToWishlistForm;
