import React from 'react';
import { Text, Image, Linking } from 'react-native';
import { Button } from 'native-base';
import styles from '../styles';

const ratingMap = {
  0: require('../../assets/yelp_stars/small/small_0.png'),
  0.5: require('../../assets/yelp_stars/small/small_0.png'),
  1: require('../../assets/yelp_stars/small/small_1.png'),
  1.5: require('../../assets/yelp_stars/small/small_1_half.png'),
  2: require('../../assets/yelp_stars/small/small_2.png'),
  2.5: require('../../assets/yelp_stars/small/small_2_half.png'),
  3: require('../../assets/yelp_stars/small/small_3.png'),
  3.5: require('../../assets/yelp_stars/small/small_3_half.png'),
  4: require('../../assets/yelp_stars/small/small_4.png'),
  4.5: require('../../assets/yelp_stars/small/small_4_half.png'),
  5: require('../../assets/yelp_stars/small/small_5.png'),
};

const YelpRating = ({ restaurant }) => {
  const requireImage = ratingMap[restaurant.rating];
  const reviewCount = `${restaurant.review_count} Reviews`;
  return (
    <Text>
      <Image source={requireImage} />
      <Text>{reviewCount}</Text>
    </Text>
  );
};

export default YelpRating;
