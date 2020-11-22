import React, { useEffect, useState }  from 'react';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import { API, graphqlOperation } from 'aws-amplify'
import { createCheckin } from '../graphql/mutations'
import { listCheckins } from '../graphql/queries'

const initialState = { time: '', location: '' }

export default function PreviousCheckIns() {
  const [checkins, setCheckins] = useState([])

  useEffect(() => {
    fetchCheckins()
  }, [])

  async function fetchCheckins() {
    try {
      const checkinData = await API.graphql(graphqlOperation(listCheckins))
      const checkins = checkinData.data.listCheckins.items
      setCheckins(checkins)
      console.log(checkins)
    } catch (err) { console.log('error fetching checkins') }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous Check Ins</Text>
      {
      checkins.map((checkin, index) => (
          <View key={checkin.id ? checkin.id : index} style={styles.checkin}>
            <Text style={styles.checkinName}>Time: {checkin.createdAt}, Place: {checkin.location}</Text>
          </View>
        ))
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '70%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
     marginVertical: 8,
  },
  checkinName:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkin:{
  },
  singleCheckIn:{
    flexDirection: 'row',
    textAlign: 'center',
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
