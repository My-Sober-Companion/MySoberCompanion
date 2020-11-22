import * as React from 'react';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';

import AreYouOkay from '../components/AreYouOkay';
import CurrentLocation from '../components/CurrentLocation';
import CheckInSection from '../components/CheckInSection';
import PreviousCheckIns from '../components/PreviousCheckIns';
import { Text, View } from '../components/Themed';

export default function CheckInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Check In - 12:00AM</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <AreYouOkay />
      <CurrentLocation />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CheckInSection />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Next Check In at 07:00AM</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <PreviousCheckIns />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
});
