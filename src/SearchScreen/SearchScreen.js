import React, { Component } from 'react';
import { Container, Icon, Content } from 'native-base';
import axios from 'axios';
import { YELP_API_KEY } from 'react-native-dotenv';
import SearchHeader from './SearchScreenComponents/SearchHeader';
import AddToWishlistForm from './SearchScreenComponents/AddToWishlistForm';
import FullScreenModal from '../sharedComponents/FullScreenModal';
import RestaurantList from '../sharedComponents/RestaurantList';

const wishlists = ['My Wishlist', 'Seattle Wishlist', 'Going Home'];

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
    };
    this.getResults = this.getResults.bind(this);
    this.wishlistModalVisibility = this.wishlistModalVisibility.bind(this);
    this.closeWishlistModal = this.closeWishlistModal.bind(this);
    this.setWishlist = this.setWishlist.bind(this);
  }
  getResults() {
    // TODO: scrape searchTerm and searchLocation from form (probably in separate function before searching)
    const searchTerm = 'pizza';
    const searchLocation = 'Virginia Beach';
    const config = {
      headers: { Authorization: `Bearer ${YELP_API_KEY}`}
    }
    // TODO: add scrolling that will dynamically give the offset variable for the get request (scrolling pagination)
    axios.get(`https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${searchLocation}&limit=50`, config)
      .then(response => this.setState({ results: response.data.businesses }));
  }
  setWishlist(newWishlist) {
    this.setState({ wishlist: newWishlist });
  }
  wishlistModalVisibility() {
    this.setState((previousState) => {
      return { wishlistModalVisible: !previousState.wishlistModalVisible };
    });
  }
  closeWishlistModal() {
    this.wishlistModalVisibility();
    this.setState({ wishlist: wishlists[0] });
  }
  render() {
    return (
      <Container>
        <SearchHeader text="Search Restaurants" onSearch={this.getResults} />
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
