import React from 'react';
import { ListView } from 'react-native';
import { List, Button, Icon } from 'native-base';
import WishlistListItem from './WishlistListItem';

const WishlistList = ({ list, navigation }) => {
  // const wishlists = list.map(wishlist => (
  //   <WishlistListItem
  //     key={wishlist.id}
  //     wishlist={wishlist}
  //     navigation={navigation}
  //   />
  // ));
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
        (<Button full onPress={() => alert(data)}>
          <Icon active name="information-circle" />
        </Button>)
      }
      leftOpenValue={75}
      renderRightHiddenRow={data =>
        (<Button full onPress={() => alert(data)}>
          <Icon active name="information-circle" />
        </Button>)
      }
      rightOpenValue={75}
    />
  );
};

export default WishlistList;
