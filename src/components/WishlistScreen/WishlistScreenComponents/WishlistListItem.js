import React from 'react';
import { View, Text } from 'react-native';
import { Icon, ListItem, Body, Button } from 'native-base';
import styles from '../../../styles';

const WishlistListItem = ({ wishlist }) => (
  <ListItem>
    <Body>
      <View flexDirection="row" justifyContent="space-between" style={{ paddingLeft: 10 }}>
        <View flexDirection="column" justifyContent="space-around">
          <Text>{wishlist.name}</Text>
        </View>
        <View flexDirection="column" justifyContent="center">
          <Button icon transparent>
            <Icon name="ios-arrow-forward-outline" style={styles.goldText} />
          </Button>
        </View>
      </View>
    </Body>
  </ListItem>
);

export default WishlistListItem;
