import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Icon, ListItem, Body, Button } from 'native-base';
import * as actions from '../../../actions';
import styles from '../../../styles';

const WishlistListItem = ({ wishlist, navigation, displayWishlist }) => {
  return (
    <ListItem onPress={() => displayWishlist(wishlist, navigation)}>
      <Body>
        <View flexDirection="row" justifyContent="space-between" style={{ paddingLeft: 10 }}>
          <View flexDirection="column" justifyContent="space-around">
            <Text>{wishlist.name}</Text>
          </View>
          <View flexDirection="column" justifyContent="center">
            <Button icon transparent>
              <Icon name="ios-arrow-forward-outline" style={styles.goldText} onPress={() => displayWishlist(wishlist, navigation)} />
            </Button>
          </View>
        </View>
      </Body>
    </ListItem>
  );
}

export default connect(null, actions)(WishlistListItem);
