import React from 'react';
import { ListView, Alert } from 'react-native';
import { List, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import WishlistListItem from './WishlistListItem';

const WishlistList = (props) => {
  const { list, navigation, prepWishlistModal } = props;
  const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
  return (
    <List
      dataSource={ds.cloneWithRows(list)}
      renderRow={data =>
        (<WishlistListItem
            key={data.id}
            wishlist={data}
            navigation={navigation}
          />)
      }
      renderLeftHiddenRow={data =>
        (<Button full success onPress={() => prepWishlistModal("edit", data)}>
          <Icon active name="ios-create-outline" />
        </Button>)
      }
      leftOpenValue={75}
      renderRightHiddenRow={data =>
        (<Button full danger onPress={() => Alert.alert(
          'Alert Title',
          'My Alert Message',
          [
            {text: 'Cancel', onPress: () => console.log('Cancelled')},
            {text: 'Ok', onPress: () => console.log('Oked')},
          ],
        )}>
          <Icon active color="red" name="ios-trash-outline" />
        </Button>)
      }
      rightOpenValue={-75}
    />
  );
};

export default connect(null, actions)(WishlistList);
