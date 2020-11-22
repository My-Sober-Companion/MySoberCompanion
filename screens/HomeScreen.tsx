import * as React from 'react';
import { Button, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Placeholder from '../assets/images/gray.jpg'

const Separator = () => (
  <View style={styles.separator} />
);

export default function HomeScreen() {
  function onPress() {
    alert('hello');
  }

  return (
    <View style={styles.container}>
      <Separator/>
      <Button title="Send Emergency Help" color="#E52929" onPress={onPress} />
      <Separator/>
      <Text style={styles.support}>Call For Support</Text>
      <Separator/>
      <Image style={styles.image} source={{uri: Placeholder}}/>
      <Separator />
      <View style={styles.progress}/>
      <Separator />
      <Text>Check ins remaining until next badge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 150,
  },
  support: {
    textDecorationLine: 'underline'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  progress: {
    width: 300,
    height: 25,
    backgroundColor: '#C4C4C4'
  }
});
