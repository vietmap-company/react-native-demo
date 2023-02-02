/**
 * VietMap Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import MapLibreGL from '@maplibre/maplibre-react-native';

import Marker from './components/marker';
import LineLayer from './components/line-layer';
import PolygonLayer from './components/polygon-layer';

import {StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    MapLibreGL.locationManager.start();

    return (): void => {
      MapLibreGL.locationManager.stop();
    };
  }, []);

  return (
    <View style={styles.page}>
      <MapLibreGL.MapView
        style={styles.map}
        logoEnabled={false}
        styleURL="https://demotiles.maplibre.org/style.json">
        <Marker id={'id'} coordinate={[106.673889, 10.758217]} y={0} x={0} />
        <Marker id={'id'} coordinate={[106.673889, 10.858217]} y={0} x={0} />

        <MapLibreGL.Camera
          zoomLevel={7}
          maxZoomLevel={18}
          animationMode={'flyTo'}
          animationDuration={1100}
          centerCoordinate={[106.673889, 10.758217]}
        />

        <MapLibreGL.RasterSource
          maxZoomLevel={18}
          id="raster-id"
          tileUrlTemplates={[
            'https://maps.vietmap.vn/tm/{z}/{x}/{y}@2x.png?apikey=[YOUR API KEY]',
          ]}>
          <MapLibreGL.RasterLayer
            maxZoomLevel={18}
            id="id-example"
            sourceID="source-id-example"
          />
        </MapLibreGL.RasterSource>
        <PolygonLayer
          coordinates={[
            [106.667093, 10.767742],
            [106.669024, 10.759858],
            [106.661686, 10.758804],
            [106.660012, 10.763905],
          ]}></PolygonLayer>
        <LineLayer
          coordinates={[
            [106.667093, 10.767742],
            [106.669024, 10.759858],
            [106.661686, 10.758804],
          ]}></LineLayer>
      </MapLibreGL.MapView>
    </View>
  );
}
MapLibreGL.setAccessToken(null);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
