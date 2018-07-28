import React from 'react';
import { Text, View, Dimensions, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Button, Header, Icon, Input, Item } from 'native-base';
import * as actions from '../../../actions'
import styles from '../../../styles';

const SearchHeader = (props) => {
  const closeKeyboardAndSearch = function closeKeyboardAndSearch() {
    Keyboard.dismiss();
    props.searchYelp(props.searchTerm, props.searchLocation, props.userLocation)
  }
  const { height, width } = Dimensions.get('window');
  const width80 = width * 0.80;
  if (props.listView) {
    displayButtonIcon = (
      <Icon name="ios-map" style={[styles.whiteText, {fontSize: 18}]} />
    )
  } else {
    displayButtonIcon = (
      <Icon name="ios-list" style={[styles.whiteText, {fontSize: 25}]} />
    )
  }
  return (
    <Header style={[{height: 130}, styles.header]} searchBar rounded flexDirection="column">
      <View marginTop={5} height={30} flexDirection="row" >
        <Item style={[styles.searchBar, {width: width80}]} >
          <View style={styles.searchBarIconPadding} >
            <Icon name="ios-search" />
          </View>
          <Input
            style={styles.searchBarTextPadding}
            placeholder="Search Restaurants"
            name="restaurantSearch"
            onChangeText={props.setSearchTerm}
            onSubmitEditing={() => closeKeyboardAndSearch()}
          />
        </Item>
        <Button transparent onPress={() => props.setSearchListView(!props.listView)} >
          {displayButtonIcon}
        </Button>
      </View>
      <View flexDirection="row" >
        <Item style={[styles.searchBar, {width: width * 0.80}]} >
          <View style={styles.searchBarIconPadding} >
            <Icon name="ios-compass-outline" />
          </View>
          <Input
            style={styles.searchBarTextPadding}
            placeholder="Location"
            name="locationSearch"
            onChangeText={props.setSearchLocation}
            onSubmitEditing={() => closeKeyboardAndSearch()}
          />
        </Item>
        <Button transparent onPress={() => closeKeyboardAndSearch()}>
          <Text style={styles.greyText}>Search</Text>
        </Button>
      </View>
    </Header>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    listView: state.searchListView,
    searchTerm: state.searchTerm,
    searchLocation: state.searchLocation,
    userLocation: state.userLocation,
  };
};

export default connect(mapStateToProps, actions)(SearchHeader);
