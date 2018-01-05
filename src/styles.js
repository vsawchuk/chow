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
  yelpBurst: {
    height: 30,
    width: 30,
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
});

module.exports = styles;
