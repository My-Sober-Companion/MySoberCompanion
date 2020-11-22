import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';

const HealthMetricsTable = () => (
  <DataTable>
    <DataTable.Row>
      <DataTable.Cell>Pulse</DataTable.Cell>
      <DataTable.Cell numeric>83 BPM</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Sp02</DataTable.Cell>
      <DataTable.Cell numeric>98%</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Body Temp</DataTable.Cell>
      <DataTable.Cell numeric>98.9 F</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Breaths PM</DataTable.Cell>
      <DataTable.Cell numeric>14</DataTable.Cell>
    </DataTable.Row>
  </DataTable>
);

export default function HealthMetrics() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Health Metrics:</Text>
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
