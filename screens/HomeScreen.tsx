import * as React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Placeholder from '../assets/images/gray.jpg';
import P1 from '../assets/images/phoenix/1.png';
import P2 from '../assets/images/phoenix/2.png';
import P3 from '../assets/images/phoenix/3.png';
import P4 from '../assets/images/phoenix/4.png';
import P5 from '../assets/images/phoenix/5.png';
import { Button, Text, View } from '../components/Themed';

const Separator = () => (
  <View style={styles.separator} />
);

interface Badge {
  name: string;
  picture: string;
  requirement: string;
  date: string;
}

const badges: Badge[] = [
  {
    name: 'Egg',
    picture: P1,
    requirement: 'Hourly Check In',
    date: '12/12/2020',
  },
  {
    name: 'Hatcling',
    picture: P2,
    requirement: '3 Hour Check In',
    date: '12/14/2020',
  },
  {
    name: 'Fledgling',
    picture: P3,
    requirement: '6 Hour Check In',
    date: '',
  },
  {
    name: 'Firecracker',
    picture: P4,
    requirement: '12 Hour Check In',
    date: '',
  },
  {
    name: 'Firebird',
    picture: P5,
    requirement: 'Daily Check In',
    date: '',
  },
];

export default function HomeScreen() {
  function onPress() {
    alert('hello');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Separator/>
        <Button title="Send Emergency Help" color="#E52929" onPress={onPress} shadow/>
        <Separator/>
        <Text style={styles.support}>Call For Support</Text>
        <Separator/>
        <Image style={styles.image} source={{uri: Placeholder}}/>
        <Separator />
        <ProgressBar progress={0.7} width={300} height={10}/>
        <Separator />
        <Text style={styles.circle}>25</Text>
        <Separator />
        <Text style={styles.checkins}>Check ins remaining until next badge!</Text>
        <View style={styles.flexList}>
          {badges.map(badge =>
            <View style={styles.badgeContainer} key={badge.name}>
              <Image style={styles.badge} source={{uri: badge.picture}}/>
              <Text style={styles.mediumBold}>{badge.name}</Text>
              <Text style={styles.medium}>{badge.requirement}</Text>
              <Text style={styles.mediumBold}>{badge.date}</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%'
  },
  badgeContainer: {
    width: '50%',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 150,
  },
  support: {
    textDecorationLine: 'underline',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
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
  },
  checkins: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  badge: {
    height: 70,
    width: 70,
    marginVertical: 5,
    alignItems: 'center'
  },
  mediumBold: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  medium: {
    fontSize: 16,
    color: 'black',
  },
  circle: {
    borderRadius: 50,
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 2},
    padding: 15,
    backgroundColor: 'yellow',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  flexList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20
  }
});
