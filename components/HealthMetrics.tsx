import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { View } from '../components/Themed';

const HealthMetricsTable = () => {
  const [pulse, setPulse] = useState('83 BPM');
  const [temp, setTemp] = useState('98.9 F');

  useEffect(() => {
    setTimeout(() => {
      if (pulse === '83 BPM') {
        setPulse('85 BPM');
      } else {
        setPulse('83 BPM');
      }
    }, 2000)
  }, [pulse]);

  useEffect(() => {
    setTimeout(() => {
      if (temp === '98.9 F') {
        setTemp('98.7 F');
      } else {
        setTemp('98.9 F');
      }
    }, 1500)
  }, [temp]);

  return (
    <DataTable>
      <DataTable.Row>
        <DataTable.Cell>Pulse</DataTable.Cell>
        <DataTable.Cell numeric>{pulse}</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Sp02</DataTable.Cell>
        <DataTable.Cell numeric>98%</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Body Temp</DataTable.Cell>
        <DataTable.Cell numeric>{temp}</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Breaths PM</DataTable.Cell>
        <DataTable.Cell numeric>14</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

export default function HealthMetrics() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Current Health Metrics:</Text> */}
      <HealthMetricsTable/>

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
