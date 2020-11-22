import * as React from 'react';
import { Button, StyleSheet, Image } from 'react-native';
import PlaceholderMap from '../assets/images/map.png'
import { Text, View } from '../components/Themed';
export default function CurrentLocation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Location</Text>
      <Image style={styles.image} source={{uri: PlaceholderMap}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
     marginVertical: 8,
  },
  textbox: {
    width:'100%',
  },
  image: {
    height: 150,
    width: 200,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
