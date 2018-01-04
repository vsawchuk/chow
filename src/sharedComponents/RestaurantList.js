import React from 'react';
import { List } from 'native-base';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = ({ list, hasAddButton, addButtonOnPress }) => {
  return (
    <List dataArray={list}
      renderRow={(item) => (
        <RestaurantListItem
            restaurant={item}
            hasAddButton={hasAddButton}
            addButtonOnPress={addButtonOnPress}
          />
      )}
    >
    </List>
  );
};

export default RestaurantList;
