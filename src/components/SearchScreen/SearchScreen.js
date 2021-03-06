import React, { Component } from 'react';
import { MapView } from 'expo';
import { View, Text, Dimensions } from 'react-native';
import { Container, Icon, Content } from 'native-base';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import * as actions from '../../actions';
import SearchHeader from './SearchScreenComponents/SearchHeader';
import AddToWishlistForm from './SearchScreenComponents/AddToWishlistForm';
import FullScreenModal from '../sharedComponents/FullScreenModal';
import RestaurantList from '../sharedComponents/RestaurantList';
import RestaurantMap from '../sharedComponents/RestaurantMap';
import AddRestaurantConfirmation from '../sharedComponents/AddRestaurantConfirmation';

class SearchScreen extends Component {
  componentWillMount() {
    this.props.getUserLocation();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userSearchCount == 0 && Object.keys(nextProps.userLocation).length > 0) {
      nextProps.searchYelp("Restaurants", "", nextProps.userLocation);
    }
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    if (this.props.searchResults.length > 0) {
      listContent = (
        <RestaurantList
          list={this.props.searchResults}
          hasAddButton
          source='yelp'
        />
      )
      mapContent = (
        <View style={{height:574, backgroundColor: "red"}}>
          <RestaurantMap restaurants={this.props.searchResults} />
        </View>
      )
      restaurantContent = this.props.listView ? listContent : mapContent
    } else {
      restaurantContent = (
        <View alignItems='center' >
          <View height={200} />
          <View width={Dimensions.get('window').width - 50} >
            <Text style={{textAlign: "center", fontSize: 20, fontWeight: 'bold'}} >No results yet!</Text>
            <View height={5} />
            <Text style={{textAlign: "center", fontSize: 17}}>Search for your next favorite restaurant using the searchbar above.</Text>
          </View>
        </View>
      )
      mapContent = (
        <View />
      )
    }
    return (
      <Container>
        <SearchHeader />
        <Spinner visible={this.props.loading} animation='fade' />
        <Content>
          {restaurantContent}
          <AddRestaurantConfirmation />
          <FullScreenModal
            isVisible={this.props.addRestaurantModalVisible}
            closeModal={this.props.closeAddRestaurantModal}
          >
            <AddToWishlistForm />
          </FullScreenModal>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listView: state.searchListView,
    loading: state.loading,
    userLocation: state.userLocation,
    userSearchCount: state.userSearchCount,
    searchResults: state.searchResults,
    addRestaurantModalVisible: state.addRestaurantModalVisible,
  };
};

export default connect(mapStateToProps, actions)(SearchScreen);
