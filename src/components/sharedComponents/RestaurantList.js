import React from 'react';
import { List } from 'native-base';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({ list, hasAddButton, source }) => {
  return (
    <List dataArray={list}
      renderRow={(item) => (
        <RestaurantListItem
            restaurant={item}
            hasAddButton={hasAddButton}
            source={source}
          />
      )}
    >
    </List>
  );
};

export default RestaurantList;
