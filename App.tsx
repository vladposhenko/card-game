import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import { store } from './store/store';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';


export default function App() {
  const [isUkrainianLocation, setLocation] = useState<boolean>(false);
  const [randomUkrainianCoords, setRandomUkrainianCoords] = useState([31.733554839999986, 51.97063826999999])

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const geoCodedAdress = await Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      })

      const geoCodedAdressUkraine = await Location.reverseGeocodeAsync({
        longitude: randomUkrainianCoords[0],
        latitude: randomUkrainianCoords[1]
      })

      if(geoCodedAdress[0].country === geoCodedAdressUkraine[0].country) {
        setLocation(true);
      }
    })();
  }, []);

  if(!isUkrainianLocation) {
    return (
      <WebView
      style={styles.container}
      source={{ uri: 'https://www.wikipedia.org' }}
    />
    )
  }  
  return (
    <Provider store={store}>
        <Navigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginTop: Constants.statusBarHeight,
  },
});
