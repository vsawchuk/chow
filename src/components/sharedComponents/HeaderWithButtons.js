import React from 'react';
import { Header, Left, Body, Title, Right } from 'native-base';
import styles from '../../styles';

const HeaderWithButtons = ({ title, leftButton, rightButton }) => {
  return (
    <Header style={styles.header}>
      <Left>
        {leftButton}
      </Left>
      <Body>
        <Title style={styles.greyText}>{title}</Title>
      </Body>
      <Right>
        {rightButton}
      </Right>
    </Header>
  )
};

export default HeaderWithButtons;
