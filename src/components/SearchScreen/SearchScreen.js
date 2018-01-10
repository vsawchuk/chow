import React, { Component } from 'react';
import { Container, Icon, Content } from 'native-base';
import { connect } from 'react-redux';
import axios from 'axios';
import { YELP_API_KEY } from 'react-native-dotenv';
import * as actions from '../../actions';
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
  constructor(props) {
    super();
    this.props = props;
    // console.log(props);
    this.state = {
      wishlistModalVisible: false,
      wishlist: wishlists[0],
    };
    this.wishlistModalVisibility = this.wishlistModalVisibility.bind(this);
    this.closeWishlistModal = this.closeWishlistModal.bind(this);
    this.setWishlist = this.setWishlist.bind(this);
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
  render() {
    return (
      <Container>
        <SearchHeader />
        <Content>
          <RestaurantList
            list={this.props.searchResults}
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

const mapStateToProps = (state, ownProps) => {
  return { searchResults: state.searchResults };
};

export default connect(mapStateToProps, actions)(SearchScreen);
