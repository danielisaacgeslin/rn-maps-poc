import React, { memo } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

export interface IMapProps {}

const Map = ({  }: IMapProps) => {
  return (
    <View key="Map" style={styles.container}>
      <Text>this is a map</Text>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
};

export default memo(Map);
