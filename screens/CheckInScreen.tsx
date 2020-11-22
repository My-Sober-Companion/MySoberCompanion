import * as React from 'react';
import { StyleSheet, Button, Alert, TextInput, Image, ScrollView } from 'react-native';
import CountDown from 'react-native-countdown-component';

import AreYouOkay from '../components/AreYouOkay';
import CurrentLocation from '../components/CurrentLocation';
import HealthMetrics from '../components/HealthMetrics';
import CheckInSection from '../components/CheckInSection';
import PreviousCheckIns from '../components/PreviousCheckIns';
import PlaceholderMap from '../assets/images/map.png'
import Accordion from '../components/Accordion';
import CountdownTimer from '../components/CountdownTimer';
import { Text, View } from '../components/Themed';

const Paper: React.FC<{children: JSX.Element}> = ({ children }) => {
  return (
    <View style={styles.paper}>
      {children}
    </View>
  );
}

export default function CheckInScreen() {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Text style={styles.heading}>Check In - 3:00 PM</Text>
        <CountdownTimer />
        <AreYouOkay />
        <Accordion title={<Text style={styles.bodyText}>Current Location</Text>} style={styles.paper}>
          <Image style={styles.mapImage} source={{uri: PlaceholderMap}}/>
        </Accordion>
        <Accordion title={<Text style={styles.bodyText}>Current Health Metrics</Text>} style={styles.paper}>
          <HealthMetrics />
        </Accordion>
        <CheckInSection />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.bodyText}>Next Check In at 07:00AM</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <PreviousCheckIns />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
     marginVertical: 8,
  },
  bodyText: {
    fontWeight: 'normal',
    fontSize: 18,
  },
  textbox: {
    width:'100%',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapImage: {
    height: 150,
    width: 200,
    margin: 'auto',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  paper: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.1,
    elevation: 3,
    padding: 5,
  }
});
