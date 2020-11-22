import React, { useEffect, useState }  from 'react';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';
import { API, graphqlOperation } from 'aws-amplify'
import { createCheckin } from '../graphql/mutations'
import { listCheckins } from '../graphql/queries'

const initialState = { name: '', description: '' }

export default function CheckInSection() {
  const [formState, setFormState] = useState(initialState)
  const [checkins, setCheckins] = useState([])

  useEffect(() => {
    fetchCheckins()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }
  async function fetchCheckins() {
    try {
      const checkinData = await API.graphql(graphqlOperation(listCheckins))
      const checkin = checkinData.data.listCheckins.items
      setCheckins(checkins)
    } catch (err) { console.log('error fetching checkins') }
  }

  async function addCheckin() {
    try {
      const checkin = { ...formState }
      setCheckins([...checkins, checkin])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createCheckin, {input: {time:"2020-11-21T22:20Z", location:"-34,44"}}))
    } catch (err) {
      console.log('error creating checkin:', err)
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title="Complete check in"
        onPress= {addCheckin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '70%',
    backgroundColor: 'unset'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
     marginVertical: 8,
  },
  checkinName:{

  },
  checkin:{

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
