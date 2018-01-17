import React from 'react';
import { List } from 'native-base';
import RestaurantListItem from './RestaurantListItem';
import styles from '../../styles';

const RestaurantList = ({ list, hasAddButton, source }) => {
  return (
    <List dataArray={list}
      style={styles.whiteBackground}
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
