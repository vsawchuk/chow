import React, { Component } from 'react';
// import ReactNative from 'react-native';
import { Container, Icon, Content } from 'native-base';
import SearchHeader from './SearchScreenComponents/SearchHeader';
import AddToWishlistForm from './SearchScreenComponents/AddToWishlistForm';
import FullScreenModal from '../sharedComponents/FullScreenModal';
import RestaurantList from '../sharedComponents/RestaurantList';

const searchResults = {
  length: 10,
  results: [
    {
      "id": "salvatores-pizzeria-virginia-beach",
      "name": "Salvatore's Pizzeria",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/x8uYOVZ8PvrlhSDThGINCA/o.jpg",
      "url": "https://www.yelp.com/biz/salvatores-pizzeria-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 367,
      "rating": 4,
      "coordinates": {
        "latitude": 36.822452034163,
        "longitude": -76.1495476306191
      },
      "price": "$$",
      "location": {
        "address1": "4876 Princess Anne Rd",
        "address2": "",
        "address3": "",
        "city": "Virginia Beach",
        "zip_code": "23462",
        "country": "US",
        "state": "VA",
        "display_address": [
          "4876 Princess Anne Rd",
          "Virginia Beach, VA 23462"
        ]
      },
    },
    {
      "id": "windy-city-pizza-virginia-beach-2",
      "name": "Windy City Pizza",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/WZGKZFUyvDuKlIHdSdy6vw/o.jpg",
      "url": "https://www.yelp.com/biz/windy-city-pizza-virginia-beach-2?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 223,
      "rating": 4.5,
      "coordinates": {
        "latitude": 36.78242,
        "longitude": -75.99931
      },
      "price": "$$",
      "location": {
        "address1": "1630 General Booth Blvd",
        "address2": null,
        "address3": null,
        "city": "Virginia Beach",
        "zip_code": "23454",
        "country": "US",
        "state": "VA",
        "display_address": [
          "1630 General Booth Blvd",
          "Virginia Beach, VA 23454"
        ]
      },
    },
    {
      "id": "brothers-pizza-virginia-beach-2",
      "name": "Brothers Pizza",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/dRLF7brNtGOlKSi_NVBOHw/o.jpg",
      "url": "https://www.yelp.com/biz/brothers-pizza-virginia-beach-2?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 214,
      "rating": 4,
      "coordinates": {
        "latitude": 36.84567,
        "longitude": -76.04913
      },
      "price": "$$",
      "location": {
        "address1": "401 N Great Neck Rd",
        "address2": null,
        "address3": "",
        "city": "Virginia Beach",
        "zip_code": "23454",
        "country": "US",
        "state": "VA",
        "display_address": [
          "401 N Great Neck Rd",
          "Virginia Beach, VA 23454"
        ]
      },
    },
    {
      "id": "your-pie-virginia-beach",
      "name": "Your Pie",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/_rod3aSwhrgM21jtvmgfBA/o.jpg",
      "url": "https://www.yelp.com/biz/your-pie-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 87,
      "rating": 4.5,
      "coordinates": {
        "latitude": 36.8530496,
        "longitude": -76.0184684
      },
      "price": "$$",
      "location": {
        "address1": "754 Hilltop N Shopping Ctr",
        "address2": null,
        "address3": "",
        "city": "Virginia Beach",
        "zip_code": "23451",
        "country": "US",
        "state": "VA",
        "display_address": [
          "754 Hilltop N Shopping Ctr",
          "Virginia Beach, VA 23451"
        ]
      },
    },
    {
      "id": "jets-pizza-virginia-beach",
      "name": "Jet's Pizza",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/lLz05eDHPBFmpsT0YOim6w/o.jpg",
      "url": "https://www.yelp.com/biz/jets-pizza-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 101,
      "rating": 4.5,
      "coordinates": {
        "latitude": 36.8009675458631,
        "longitude": -76.1294652818551
      },
      "price": "$$",
      "location": {
        "address1": "4402 Princess Anne Rd",
        "address2": "",
        "address3": "",
        "city": "Virginia Beach",
        "zip_code": "23462",
        "country": "US",
        "state": "VA",
        "display_address": [
          "4402 Princess Anne Rd",
          "Virginia Beach, VA 23462"
        ]
      },
    },
    {
      "id": "ginos-pizzeria-by-maurizio-virginia-beach",
      "name": "Gino's Pizzeria by Maurizio",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/XGANLQxuNOqJkhsNy-Nkdw/o.jpg",
      "url": "https://www.yelp.com/biz/ginos-pizzeria-by-maurizio-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 135,
      "rating": 4,
      "coordinates": {
        "latitude": 36.790007,
        "longitude": -75.997756
      },
      "price": "$$",
      "location": {
        "address1": "1479 General Booth Blvd",
        "address2": "",
        "address3": "",
        "city": "Virginia Beach",
        "zip_code": "23454",
        "country": "US",
        "state": "VA",
        "display_address": [
          "1479 General Booth Blvd",
          "Virginia Beach, VA 23454"
        ]
      },
    },
    {
        "id": "pungo-pizza-and-ice-cream-virginia-beach",
        "name": "Pungo Pizza & Ice Cream",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Av8KQFldWuxBlIiIGGpvyA/o.jpg",
        "url": "https://www.yelp.com/biz/pungo-pizza-and-ice-cream-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
        "review_count": 105,
        "rating": 4.5,
        "coordinates": {
            "latitude": 36.72613,
            "longitude": -76.0167
        },
        "price": "$$",
        "location": {
            "address1": "1824 Princess Anne Rd",
            "address2": "",
            "address3": "",
            "city": "Virginia Beach",
            "zip_code": "23456",
            "country": "US",
            "state": "VA",
            "display_address": [
                "1824 Princess Anne Rd",
                "Virginia Beach, VA 23456"
            ]
        },
    },
    {
      "id": "rays-ny-pizza-virginia-beach",
      "name": "Ray's NY Pizza",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/r2JK4I1yYVaCb5RFVu1BqA/o.jpg",
      "url": "https://www.yelp.com/biz/rays-ny-pizza-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 88,
      "rating": 4,
      "coordinates": {
        "latitude": 36.8530884,
        "longitude": -76.1775436
      },
      "price": "$",
      "location": {
        "address1": "442 Newtown Rd",
        "address2": "",
        "address3": "",
        "city": "Virginia Beach",
        "zip_code": "23462",
        "country": "US",
        "state": "VA",
        "display_address": [
          "442 Newtown Rd",
          "Virginia Beach, VA 23462"
        ]
      },
    },
    {
      "id": "adamos-new-york-pizzeria-virginia-beach",
      "name": "Adamo's New York Pizzeria",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/bYMi_8WlZCI4xUs0ukv_3A/o.jpg",
      "url": "https://www.yelp.com/biz/adamos-new-york-pizzeria-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 51,
      "rating": 4,
      "coordinates": {
        "latitude": 36.787778,
        "longitude": -76.151144
      },
      "price": "$",
      "location": {
        "address1": "4221 Pleasant Valley Rd",
        "address2": "Ste 128",
        "address3": "",
        "city": "Virginia Beach",
        "zip_code": "23464",
        "country": "US",
        "state": "VA",
        "display_address": [
          "4221 Pleasant Valley Rd",
          "Ste 128",
          "Virginia Beach, VA 23464"
        ]
      },
    },
    {
      "id": "marcos-pizza-virginia-beach",
      "name": "Marco's Pizza",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/-JdV2XoXNIik_8T6r0tIkg/o.jpg",
      "url": "https://www.yelp.com/biz/marcos-pizza-virginia-beach?adjust_creative=JkYa_ReWRiIjasE8wJSXhw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=JkYa_ReWRiIjasE8wJSXhw",
      "review_count": 48,
      "rating": 4,
      "coordinates": {
        "latitude": 36.8430711781805,
        "longitude": -76.0777345057654
      },
      "price": "$",
      "location": {
        "address1": "3030 Virginia Beach Blvd",
        "address2": "",
        "address3": "",
        "city": "Virginia Beach",
        "zip_code": "23452",
        "country": "US",
        "state": "VA",
        "display_address": [
          "3030 Virginia Beach Blvd",
          "Virginia Beach, VA 23452"
        ]
      },
    },
  ],
};

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
    this.setState(() => {
      return { results: searchResults.results };
    });
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
