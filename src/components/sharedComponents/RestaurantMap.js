import React from 'react';
import { MapView } from 'expo';
import styles from '../../styles';

const getDescriptionFromCategories = function getDescriptionFromCategories(categories) {
  return categories.map(category => category.title).join(", ");
}

const RestaurantMap = ({restaurants}) => {
  const latLongOffset = 0.01
  const latitudes = restaurants.map(restaurant => restaurant.coordinates.latitude);
  const longitudes = restaurants.map(restaurant => restaurant.coordinates.longitude);
  const minLat = Math.min(...latitudes);
  const latDifference = (Math.max(...latitudes) - minLat);
  const minLong = Math.min(...longitudes);
  const longDifference = (Math.max(...longitudes) - minLong);
  const midLatitude = minLat + (latDifference / 2);
  const midLongitude = minLong + (longDifference / 2);
  return (
    <MapView
      style={{flex: 1}}
      region={{
        latitude: midLatitude,
        longitude: midLongitude,
        latitudeDelta: latDifference + latLongOffset,
        longitudeDelta: longDifference + latLongOffset,
      }}
    >
      {restaurants.map(restaurant => (
        <MapView.Marker
          key={restaurant.id}
          coordinate={restaurant.coordinates}
          title={restaurant.name}
          description={getDescriptionFromCategories(restaurant.categories)}
        />
      ))}
    </MapView>
  )
}

export default RestaurantMap;
