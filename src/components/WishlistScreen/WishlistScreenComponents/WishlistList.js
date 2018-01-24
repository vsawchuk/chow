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
      enableEmptySections={true}
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
          `Delete Wishlist`,
          `Are you sure you want to delete ${data.name}?`,
          [
            {text: 'Cancel'},
            {text: 'Ok', onPress: () => props.attemptDeleteWishlist(data.id, props.userId)},
          ],
        )}>
          <Icon active color="red" name="ios-trash-outline" />
        </Button>)
      }
      rightOpenValue={-75}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  const userId = (Object.keys(state.user).length > 0) ? state.user.id : -1;
  return { userId };
};

export default connect(mapStateToProps, actions)(WishlistList);
