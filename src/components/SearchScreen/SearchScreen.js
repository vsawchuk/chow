import React, { Component } from 'react';
import { Container, Icon, Content } from 'native-base';
import { connect } from 'react-redux';
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
    console.log(props);
    this.state = {
      wishlist: wishlists[0],
    };
    this.setWishlist = this.setWishlist.bind(this);
  }
  setWishlist(newWishlist) {
    this.setState({ wishlist: newWishlist });
  }
  render() {
    return (
      <Container>
        <SearchHeader />
        <Content>
          <RestaurantList
            list={this.props.searchResults}
            hasAddButton
            addButtonOnPress={this.props.displayAddRestaurantModal}
          />
          <FullScreenModal
            isVisible={this.props.addRestaurantModalVisible}
            closeModal={this.props.closeAddRestaurantModal}
          >
            <AddToWishlistForm
              currentWishlist={this.state.wishlist}
              onValueChange={this.setWishlist}
            />
          </FullScreenModal>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    searchResults: state.searchResults,
    addRestaurantModalVisible: state.addRestaurantModalVisible,
  };
};

export default connect(mapStateToProps, actions)(SearchScreen);
