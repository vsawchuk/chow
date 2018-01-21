import React from 'react';
import { ListView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, List } from 'native-base';
import RestaurantListItem from '../sharedComponents/RestaurantListItem';
import HeaderWithButtons from '../sharedComponents/HeaderWithButtons';
import * as actions from '../../actions';
import styles from '../../styles';

// TODO: cause to re-render after a restuarant has been deleted

const SingleWishlistScreen = (props) => {
  const { navigation, wishlist, userId, attemptDeleteRestaurantFromWishlist } = props;
  const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
  const leftButton = (
    <Button transparent>
      <Icon
        style={styles.greyText}
        name="ios-arrow-back-outline"
        onPress={() => navigation.goBack()}
      />
    </Button>
  );
  return (
    <Container style={styles.whiteBackground}>
      <HeaderWithButtons title={wishlist.name} leftButton={leftButton} />
      <Content>
        <List
          dataSource={ds.cloneWithRows(wishlist.restaurants)}
          renderRow={data =>
            (<RestaurantListItem
                restaurant={data}
                source="chow"
            />)
          }
          renderLeftHiddenRow={data => null}
          leftOpenValue={0}
          renderRightHiddenRow={data =>
            (<Button full danger onPress={() => Alert.alert(
              `Delete Restaurant`,
              `Are you sure you want to delete ${data.name}?`,
              [
                {text: 'Cancel'},
                {text: 'Ok', onPress: () => props.attemptDeleteRestaurantFromWishlist(data.id, wishlist.id, userId)},
              ],
            )}>
              <Icon active color="red" name="ios-trash-outline" />
            </Button>)
          }
          rightOpenValue={-75}
        />
      </Content>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  const userId = (Object.keys(state.user).length > 0) ? state.user.id : -1;
  return { wishlist: state.currentDisplayWishlist, userId };
};

export default connect(mapStateToProps, actions)(SingleWishlistScreen);
