import React from 'react';
import { Header, Left, Body, Title, Right } from 'native-base';
import styles from '../styles';

const HeaderWithRightButton = ({ title, headerButton }) => {
  return (
    <Header style={styles.header}>
      <Left />
      <Body>
        <Title style={styles.greyText}>{title}</Title>
      </Body>
      <Right>
        {headerButton}
      </Right>
    </Header>
  )
};

export default HeaderWithRightButton;
