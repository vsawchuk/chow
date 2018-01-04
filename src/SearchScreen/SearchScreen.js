import React, { Component } from 'react';
import { Container, Icon, Content } from 'native-base';
import axios from 'axios';
import { YELP_API_KEY } from 'react-native-dotenv';
import SearchHeader from './SearchScreenComponents/SearchHeader';
import AddToWishlistForm from './SearchScreenComponents/AddToWishlistForm';
import FullScreenModal from '../sharedComponents/FullScreenModal';
import RestaurantList from '../sharedComponents/RestaurantList';

// TODO: remove static wishlists and use a get request to the API to get a user's wishlists
const wishlists = [
  {
    "id": 1,
    "name": "My Wishlist"
  },
  {
    "id": 2,
    "name": "Seattle Wishlist",
  },
  {
    "id": 3,
    "name": "Going Home",
  },
];

class SearchScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={[{ color: tintColor }]} />
    ),
  }
  constructor() {
    super();
    this.state = {
      results: [],
      wishlistModalVisible: false,
      wishlist: wishlists[0],
      searchTerm: null,
      searchLocation: null,
    };
    this.getResults = this.getResults.bind(this);
    this.wishlistModalVisibility = this.wishlistModalVisibility.bind(this);
    this.closeWishlistModal = this.closeWishlistModal.bind(this);
    this.setWishlist = this.setWishlist.bind(this);
    this.restaurantOnChange = this.restaurantOnChange.bind(this);
    this.locationOnChange = this.locationOnChange.bind(this);
  }
  getResults() {
    // TODO: remove when finished with searchView
    if (this.state.searchTerm === null) {
      this.setState({ searchTerm: 'Pizza', searchLocation: 'Virginia Beach' });
    }
    const requestURL = `https://api.yelp.com/v3/businesses/search?term=${this.state.searchTerm}&location=${this.state.searchLocation}&limit=50`;
    const config = {
      headers: { Authorization: `Bearer ${YELP_API_KEY}` },
    };
    // TODO: add scrolling that will dynamically give
    // offset variable for the get request (scrolling pagination)
    axios.get(requestURL, config)
      .then(response => this.setState({ results: response.data.businesses }));
  }
  setWishlist(newWishlist) {
    this.setState({ wishlist: newWishlist });
  }
  wishlistModalVisibility() {
    this.setState({ wishlistModalVisible: !this.state.wishlistModalVisible });
  }
  closeWishlistModal() {
    this.wishlistModalVisibility();
    this.setState({ wishlist: wishlists[0] });
  }
  restaurantOnChange(newRestaurant) {
    this.setState({ searchTerm: newRestaurant });
  }
  locationOnChange(newLocation) {
    this.setState({ searchLocation: newLocation });
  }
  render() {
    return (
      <Container>
        <SearchHeader
          onSearch={this.getResults}
          restaurantOnChange={this.restaurantOnChange}
          locationOnChange={this.locationOnChange}
        />
        <Content>
          <RestaurantList
            list={this.state.results}
            hasAddButton
            addButtonOnPress={this.wishlistModalVisibility}
          />
          <FullScreenModal
            isVisible={this.state.wishlistModalVisible}
            closeModal={this.closeWishlistModal}
          >
            <AddToWishlistForm
              currentWishlist={this.state.wishlist}
              wishlists={wishlists}
              onValueChange={this.setWishlist}
            />
          </FullScreenModal>
        </Content>
      </Container>
    );
  }
}

module.exports = SearchScreen;
