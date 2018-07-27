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
  return (
    <Header style={[{height: 130}, styles.header]} searchBar rounded flexDirection="column">
      <View marginTop={5} height={30} width={width * 0.80} >
        <Item style={styles.searchBar} >
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
      </View>
      <View flexDirection="row" >
        <Item style={styles.searchBar} >
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
  return { searchTerm: state.searchTerm, searchLocation: state.searchLocation, userLocation: state.userLocation };
};

export default connect(mapStateToProps, actions)(SearchHeader);
