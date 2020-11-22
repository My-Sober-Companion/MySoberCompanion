import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';
import CountDown from 'react-native-countdown-component';


export default function CountdownTimer() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Current Health Metrics:</Text> */}
      {/* <HealthMetricsTable/> */}
      <Text style={styles.timerLabel}>Time remaining to complete:</Text>
      <View style={styles.timer}>
            <CountDown
                until={10 * 60 + 30}
                size={13}
                digitStyle={{backgroundColor: '#FFF', borderWidth: 0, borderColor: '#FFF'}}
                digitTxtStyle={{color: '#2958E5', fontWeight: 'normal'}}
                // timeLabelStyle={{color: 'red', fontWeight: 'normal'}}
                separatorStyle={{color: '#2958E5'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  timerLabel: {
    width: '80%',
  },
  timer: {
    width: '20%',
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
