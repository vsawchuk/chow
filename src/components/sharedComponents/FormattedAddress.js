import React from 'react';
import { Text } from 'react-native';

const FormattedAddress = ({ addressArray }) => {
  const addressComponents = addressArray.map(addressItem => (
    <Text key={addressItem}>{addressItem}</Text>
  ));
  return addressComponents;
};

export default FormattedAddress;
