import React from 'react';
import { Text } from 'react-native';
import { Button, Header, Icon, Input, Item } from 'native-base';
import styles from '../../styles';

// TODO: format searchbars to be on separate lines
const SearchHeader = ({ onSearch, restaurantOnChange, locationOnChange }) => (
  <Header style={styles.header} searchBar rounded>
    <Item style={styles.greyBackground}>
      <Icon name="ios-search" />
      <Input placeholder="Search Restaurants" name="restaurantSearch" onChangeText={restaurantOnChange} />
    </Item>
    <Item style={styles.greyBackground}>
      <Icon name="ios-compass-outline" />
      <Input placeholder="Location" name="locationSearch" onChangeText={locationOnChange} />
    </Item>
    <Button transparent onPress={onSearch}>
      <Text style={styles.greyText}>Search</Text>
    </Button>
  </Header>
);

export default SearchHeader;
