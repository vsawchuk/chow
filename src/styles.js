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
  profileHeader: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: GOLD,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: GREY,
    paddingBottom: 10,
  },
  navIcon: {
    height: 30,
    width: 30,
  },
  flexContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
});

module.exports = styles;
