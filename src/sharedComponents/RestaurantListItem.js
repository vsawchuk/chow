import React from 'react';
import { View, Text } from 'react-native';
import { Icon, ListItem, Body, Thumbnail, Button } from 'native-base';
import styles from '../styles';
import YelpRating from './YelpRating';
import FormattedAddress from './FormattedAddress';

const RestaurantListItem = ({ restaurant, hasAddButton, addButtonOnPress }) => {
  let button;
  if (hasAddButton) {
    button = (
      <Button icon transparent style={[{ flex: 1 }]} onPress={addButtonOnPress}>
        <Icon name="ios-add-circle" style={styles.goldText} />
      </Button>
    );
  }
  return (
    <ListItem>
      <Thumbnail square size={80} source={{ uri: restaurant.image_url }} />
      <Body>
        <Text>{restaurant.name}</Text>
        <View flexDirection="row">
          <YelpRating restaurant={restaurant} />
          {button}
        </View>
        <FormattedAddress addressArray={restaurant.location.display_address} />
      </Body>
    </ListItem>
  );
};

export default RestaurantListItem;
