import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { Container, Header, Item, Icon, Input, Button } from 'native-base';
import styles from './styles';

class SearchScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={[{ color: tintColor }]} />
    ),
  }
  render() {
    return (
      <Container>
        <Header style={styles.header} searchBar rounded>
          <Item style={styles.greyBackground}>
            <Icon name="ios-search" />
            <Input placeholder="Search Restaurants" />
          </Item>
          <Button transparent>
            <Text style={styles.greyText}>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

module.exports = SearchScreen;
