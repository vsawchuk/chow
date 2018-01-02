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
  greyText: {
    color: GREY,
  },
  greyBackground: {
    backgroundColor: GREY,
  },
  navIcon: {
    height: 30,
    width: 30,
  },
});

module.exports = styles;
