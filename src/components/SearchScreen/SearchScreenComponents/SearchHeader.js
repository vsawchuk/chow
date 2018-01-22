import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Button, Header, Icon, Input, Item } from 'native-base';
import * as actions from '../../../actions'
import styles from '../../../styles';

// TODO: format searchbars to be on separate lines
const SearchHeader = (props) => {
  const { height, width } = Dimensions.get('window');
  return (
    <Header style={[styles.header, {height: 130}]} searchBar rounded flexDirection="column">
      <View marginTop={5} height={30} width={width * 0.80} >
        <Item style={styles.searchBar} >
          <View style={styles.searchBarIconPadding} >
            <Icon name="ios-search" />
          </View>
          <Input style={styles.searchBarTextPadding} placeholder="Search Restaurants" name="restaurantSearch" onChangeText={props.setSearchTerm} />
        </Item>
      </View>
      <View flexDirection="row" >
        <Item style={styles.searchBar} >
          <View style={styles.searchBarIconPadding} >
            <Icon name="ios-compass-outline" />
          </View>
          <Input style={styles.searchBarTextPadding} placeholder="Location" name="locationSearch" onChangeText={props.setSearchLocation} />
        </Item>
        <Button transparent onPress={() => props.searchYelp(props.searchTerm, props.searchLocation, props.userLocation)}>
          <Text style={styles.greyText}>Search</Text>
        </Button>
      </View>
    </Header>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { searchTerm: state.searchTerm, searchLocation: state.searchLocation, userLocation: state.userLocation };
};

export default connect(mapStateToProps, actions)(SearchHeader);
