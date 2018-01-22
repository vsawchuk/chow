import React, { Component } from 'react';
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
      nextProps.searchYelp("Restaurants", nextProps.userLocation);
    }
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    return (
      <Container>
        <SearchHeader />
        <Content>
          <RestaurantList
            list={this.props.searchResults}
            hasAddButton
            source='yelp'
          />
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
    userLocation: state.userLocation,
    userSearchCount: state.userSearchCount,
    searchResults: state.searchResults,
    addRestaurantModalVisible: state.addRestaurantModalVisible,
  };
};

export default connect(mapStateToProps, actions)(SearchScreen);
