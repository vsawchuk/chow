import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Header, Icon, Input, Item } from 'native-base';
import * as actions from '../../../actions'
import styles from '../../../styles';

// TODO: format searchbars to be on separate lines
const SearchHeader = (props) => {
  return (
    <Header style={styles.header} searchBar rounded>
      <Item style={styles.greyBackground}>
        <Icon name="ios-search" />
        <Input placeholder="Search Restaurants" name="restaurantSearch" onChangeText={props.setSearchTerm} />
      </Item>
      <Item style={styles.greyBackground}>
        <Icon name="ios-compass-outline" />
        <Input placeholder="Location" name="locationSearch" onChangeText={props.setSearchLocation} />
      </Item>
      <Button transparent onPress={() => props.searchYelp(props.searchTerm, props.searchLocation)}>
        <Text style={styles.greyText}>Search</Text>
      </Button>
    </Header>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { searchTerm: state.searchTerm, searchLocation: state.searchLocation };
};

export default connect(mapStateToProps, actions)(SearchHeader);
