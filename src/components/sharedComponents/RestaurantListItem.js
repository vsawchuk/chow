import React from 'react';
import { View, Text, Linking, Image } from 'react-native';
import { Icon, ListItem, Body, Thumbnail, Button } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styles from '../../styles';
import YelpRating from './YelpRating';
import FormattedAddress from './FormattedAddress';
import { calculateDistanceFromCoordinates } from '../../formulas';

const RestaurantListItem = (props) => {
  const { restaurant, hasAddButton, setupAddRestaurant, source, haveLocation, userLocation, loggedIn, wishlists, userId } = props;
  const { name, price, url } = restaurant;
  let imageUrl;
  let displayAddress;
  let yelpOffsetText;
  let chowOffsetStyle;
  let addButton;
  let distance;
  let haveRestaurantLocation
  if ( source === 'yelp' ) {
    imageUrl = restaurant.image_url;
    displayAddress = restaurant.location.display_address;
    yelpOffsetText = "   ";
    haveRestaurantLocation = Object.keys(restaurant.coordinates).length > 0;
  } else {
    imageUrl = restaurant.imageUrl;
    displayAddress = restaurant.displayAddress;
    chowOffsetStyle = styles.leftPadding15;
    haveRestaurantLocation = Object.keys(restaurant).includes("latitude")  && Object.keys(restaurant).includes("longitude");
  }
  if (hasAddButton) {
    const onPress = loggedIn ? () => setupAddRestaurant(restaurant, wishlists, userId) : props.displayLoginModal;
    addButton = (
      <Button icon transparent style={[{ flex: 1 }]} onPress={onPress}>
        <Icon name="ios-add-circle" style={styles.goldText} />
      </Button>
    );
  }
  if (haveLocation && haveRestaurantLocation) {
    const restaurantLatitude = source == 'yelp' ? restaurant.coordinates.latitude : restaurant.latitude;
    const restaurantLongitude = source == 'yelp' ? restaurant.coordinates.longitude : restaurant.longitude;
    const distanceNumber = calculateDistanceFromCoordinates(userLocation.latitude, userLocation.longitude, restaurantLatitude, restaurantLongitude);
    distance = `${distanceNumber.toFixed(1)} mi`;
  }
  return (
    <ListItem style={chowOffsetStyle}>
      <Thumbnail square large source={{ uri: imageUrl }} />
      <Body flexDirection="row" justifyContent="space-between" style={{ paddingLeft: 10 }}>
        <View flex={5} flexDirection="column" justifyContent="space-around">
          <Text style={styles.restaurantName}>{name}</Text>
          <YelpRating restaurant={restaurant} source={source} />
          <FormattedAddress addressArray={displayAddress} />
        </View>
        <View flexDirection="column" justifyContent="space-around" alignItems="center" >
          <View alignItems="flex-end">
            <Text>{distance}</Text>
            <Text>{price}</Text>
          </View>
          {addButton}
          <Button
            transparent
            onPress={() => Linking.openURL(url)}
            style={styles.yelpBurst}
          >
            <Text>{yelpOffsetText}</Text>
            <Image source={require('../../../assets/yelp_burst/Screen/Yelp_burst_positive_RGB.png')} style={styles.yelpBurst} />
          </Button>
        </View>
      </Body>
    </ListItem>
  );
};

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Object.keys(state.user).length > 0;
  const haveLocation = Object.keys(state.userLocation).length > 0;
  const userId = loggedIn ? state.user.id : null;
  return { haveLocation, userLocation: state.userLocation, loggedIn, wishlists: state.wishlists, userId };
};

export default connect(mapStateToProps, actions)(RestaurantListItem);
