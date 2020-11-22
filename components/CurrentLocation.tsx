import * as React from 'react';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';

export default function CurrentLocation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Location</Text>
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
