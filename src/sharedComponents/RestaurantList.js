import React from 'react';
import { Text } from 'react-native';
import { List } from 'native-base';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({ list, hasAddButton, addButtonOnPress }) => {
  const restaurants = list.map(restaurant => <RestaurantListItem restaurant={restaurant} hasAddButton={hasAddButton} addButtonOnPress={addButtonOnPress} />);
  return (
    <List>
      {restaurants}
    </List>
  );
};

export default RestaurantList;
