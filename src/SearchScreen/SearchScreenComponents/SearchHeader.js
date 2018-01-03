import React from 'react';
import { Text } from 'react-native';
import { Button, Header, Icon, Input, Item } from 'native-base';
import styles from '../../styles';

const SearchHeader = ({ text, onSearch }) => {
  return (
    <Header style={styles.header} searchBar rounded>
      <Item style={styles.greyBackground}>
        <Icon name="ios-search" />
        <Input placeholder={text} />
      </Item>
      <Button transparent onPress={onSearch}>
        <Text style={styles.greyText}>Search</Text>
      </Button>
    </Header>
  );
};

export default SearchHeader;
