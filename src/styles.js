import {
  StyleSheet,
} from 'react-native';

const GOLD = '#F9A602';
const GREY = '#F3F2E9';
const DARKBLUE = '#2F3553';

const styles = StyleSheet.create({
  search: {
    backgroundColor: 'blue',
    flex: 1,
  },
  wishlist: {
    backgroundColor: 'red',
    flex: 1,
  },
  profile: {
    backgroundColor: 'green',
    flex: 1,
  },
  header: {
    backgroundColor: GOLD,
  },
  goldText: {
    color: GOLD,
  },
  goldBackground: {
    backgroundColor: GOLD,
  },
  greyText: {
    color: GREY,
  },
  greyBackground: {
    backgroundColor: GREY,
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
  yelpLogo: {
    height: 35,
    width: 40,
  },
  centeredRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredColumnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  username: {
    fontSize: 20,
    paddingTop: 20,
  },
  popupModal: {
    height: 130,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  popupModalLeftButtonContainer: {
    flex: 1,
  },
  popupModalCenterButtonContainer: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadedBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(48, 48, 48, 0.3)',
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  leftPadding15: {
    paddingLeft: 15,
  },
  searchBar: {
    paddingBottom: 1,
    backgroundColor: GREY,
  },
  searchBarTextPadding: {
    paddingTop: 0,
  },
  searchBarIconPadding: {
    paddingTop: 2,
  },
  confirmationIcon: {
    fontSize: 100,
    color: GOLD,
  },
  confirmationButton: {
    backgroundColor: 'rgba(48, 48, 48, 0.3)',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  linkBlue: {
    color: '#007aff',
  },
});

module.exports = styles;
