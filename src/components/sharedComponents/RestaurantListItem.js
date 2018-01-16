import React from 'react';
import { View, Text, Linking, Image } from 'react-native';
import { Icon, ListItem, Body, Thumbnail, Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from '../../styles';
import YelpRating from './YelpRating';
import FormattedAddress from './FormattedAddress';

const RestaurantListItem = (props) => {
  const { restaurant, hasAddButton, setupAddRestaurant } = props;
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
      <Thumbnail square size={80} source={{ uri: restaurant.image_url }} />
      <Body>
        <View flexDirection="row" justifyContent="space-between" style={{ paddingLeft: 10 }}>
          <View flexDirection="column" justifyContent="space-around">
            <Text>{restaurant.name}</Text>
            <YelpRating restaurant={restaurant} />
            <FormattedAddress addressArray={restaurant.location.display_address} />
          </View>
          <View flexDirection="column" justifyContent="space-around">
            <Text>{restaurant.price}</Text>
            {addButton}
            <Button
              transparent
              onPress={() => Linking.openURL(restaurant.url)}
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

// export default RestaurantListItem;
export default connect(null, actions)(RestaurantListItem);
