import React from 'react';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon } from 'native-base';
import RestaurantList from '../sharedComponents/RestaurantList';
import HeaderWithButtons from '../sharedComponents/HeaderWithButtons';
import styles from '../../styles';

const SingleWishlistScreen = ({ navigation, wishlist }) => {
  // const { wishlist } = navigation.state.params;
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

const mapStateToProps = (state, ownProps) => {
  return { wishlist: state.currentDisplayWishlist };
};

export default connect(mapStateToProps)(SingleWishlistScreen);
