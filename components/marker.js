import React from 'react';
import { View } from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';
const Marker = ({ id, coordinate, x, y }) => {
  return (
    <MapLibreGL.MarkerView 
      id={id}
      coordinate={coordinate}
      x={x}
      y={y}
    >
      <View style={{ width: 10, height: 10, backgroundColor: 'red' }} />
    </MapLibreGL.MarkerView>
  );
};

export default Marker;
