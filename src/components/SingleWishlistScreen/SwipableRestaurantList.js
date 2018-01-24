import React from 'react';
import { ListView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, List } from 'native-base';
import RestaurantListItem from '../sharedComponents/RestaurantListItem';
import HeaderWithButtons from '../sharedComponents/HeaderWithButtons';
import * as actions from '../../actions';
import styles from '../../styles';

const SwipableRestaurantList = (props) => {
  const { wishlist, userId, attemptDeleteRestaurantFromWishlist } = props;
  const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
  const closeRowAndDelete = function closeRowAndDelete(data, wishlist, userId, rowId, secId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    attemptDeleteRestaurantFromWishlist(data.id, wishlist, userId);
  }
  return (
    <List
      enableEmptySections={true}
      dataSource={ds.cloneWithRows(wishlist.restaurants)}
      renderRow={data =>
        (<RestaurantListItem
            restaurant={data}
            source="chow"
        />)
      }
      renderLeftHiddenRow={data => null}
      leftOpenValue={0}
      renderRightHiddenRow={(data, secId, rowId, rowMap) =>
        (<Button full danger onPress={() => Alert.alert(
          `Delete Restaurant`,
          `Are you sure you want to delete ${data.name}?`,
          [
            {text: 'Cancel'},
            {text: 'Ok', onPress: () => closeRowAndDelete(data, wishlist, userId, rowId, secId, rowMap)},
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

export default connect(mapStateToProps, actions)(SwipableRestaurantList);
