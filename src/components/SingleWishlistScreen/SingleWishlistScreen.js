import React from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import { NavigationActions } from 'react-navigation';
import RestaurantList from '../sharedComponents/RestaurantList';
import HeaderWithButtons from '../sharedComponents/HeaderWithButtons';
import styles from '../../styles';

const SingleWishlistscreen = (props) => {
  const { wishlist } = props.navigation.state.params;
  const leftButton = (
    <Button transparent>
      <Icon
        style={styles.greyText}
        name="ios-arrow-back-outline"
        onPress={() => props.navigation.dispatch(NavigationActions.back())}
      />
    </Button>
  );
  return (
    <Container>
      <HeaderWithButtons title={wishlist.name} leftButton={leftButton} />
      <Content>
        <RestaurantList
          list={wishlist.restaurants}
          source="chow"
        />
      </Content>
    </Container>
  );
};

export default SingleWishlistscreen;
