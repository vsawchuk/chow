import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from '../../styles';

const UserProfile = ({ user }) => {
  return (
    <View style={styles.centeredColumnContainer}>
      <View>
        <Image source={{ uri: user.photoUrl }} style={styles.userImage} />
      </View>
      <Text style={styles.username}>{user.username}</Text>
    </View>
  );
};

export default UserProfile;
