import React from 'react';
import { View, Text, Linking, Image } from 'react-native';
import { Icon, ListItem, Body, Thumbnail, Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from '../../styles';
import YelpRating from './YelpRating';
import FormattedAddress from './FormattedAddress';

const RestaurantListItem = (props) => {
  const { restaurant, hasAddButton, setupAddRestaurant, source } = props;
  const { name, price, url } = restaurant;
  let imageUrl;
  let displayAddress;
  if ( source === 'yelp' ) {
    imageUrl = restaurant.image_url;
    displayAddress = restaurant.location.display_address;
  } else {
    imageUrl = restaurant.imageUrl;
    displayAddress = restaurant.displayAddress;
  }
  let addButton;
  if (hasAddButton) {
    addButton = (
      <Button icon transparent style={[{ flex: 1 }]} onPress={() => setupAddRestaurant(restaurant)}>
        <Icon name="ios-add-circle" style={styles.goldText} />
      </Button>
    );
  }
  return (
    <ListItem>
      <Thumbnail square size={80} source={{ uri: imageUrl }} />
      <Body>
        <View flexDirection="row" justifyContent="space-between" style={{ paddingLeft: 10 }}>
          <View flexDirection="column" justifyContent="space-around">
            <Text>{name}</Text>
            <YelpRating restaurant={restaurant} source={source} />
            <FormattedAddress addressArray={displayAddress} />
          </View>
          <View flexDirection="column" justifyContent="space-around">
            <Text>{price}</Text>
            {addButton}
            <Button
              transparent
              onPress={() => Linking.openURL(url)}
              style={styles.yelpBurst}
            >
              <Image source={require('../../../assets/yelp_burst/Screen/Yelp_burst_positive_RGB.png')} style={styles.yelpBurst} />
            </Button>
          </View>
        </View>
      </Body>
    </ListItem>
  );
};

export default connect(null, actions)(RestaurantListItem);
