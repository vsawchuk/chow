import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Container, Icon, Content } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SearchHeader from './SearchScreenComponents/SearchHeader';
import AddToWishlistForm from './SearchScreenComponents/AddToWishlistForm';
import FullScreenModal from '../sharedComponents/FullScreenModal';
import RestaurantList from '../sharedComponents/RestaurantList';

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
    } else {
      listContent = (
        <View alignItems='center' >
          <View height={200} />
          <View width={Dimensions.get('window').width - 50} >
            <Text style={{textAlign: "center", fontSize: 20, fontWeight: 'bold'}} >No results yet!</Text>
            <View height={5} />
            <Text style={{textAlign: "center", fontSize: 17}}>Search for your next favorite restaurant using the searchbar above.</Text>
          </View>
        </View>
      )
    }
    return (
      <Container>
        <SearchHeader />
        <Content>
          {listContent}
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
    loading: state.loading,
    userLocation: state.userLocation,
    userSearchCount: state.userSearchCount,
    searchResults: state.searchResults,
    addRestaurantModalVisible: state.addRestaurantModalVisible,
  };
};

export default connect(mapStateToProps, actions)(SearchScreen);
