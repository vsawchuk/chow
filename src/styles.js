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
  profileHeaderButton: {
    fontSize: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: GREY,
  },
  navIcon: {
    height: 30,
    width: 30,
  },
  flexContainer: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

module.exports = styles;
