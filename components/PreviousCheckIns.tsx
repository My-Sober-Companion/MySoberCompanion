import React, { useEffect, useState }  from 'react';
import { StyleSheet, Button, Alert, TextInput, Image } from 'react-native';
import Accordion from '../components/Accordion';
import PlaceholderMap from '../assets/images/map.png'
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
    } catch (err) { console.log('error fetching checkins') }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous Check Ins</Text>
      {
      checkins.sort((a,b) => {
        return new Date(a.createdAt).getTime() - 
        new Date(b.createdAt).getTime()
      }).reverse().map((checkin, index) => (
          <Accordion title={<Text style={styles.bodyText}>{new Intl.DateTimeFormat("en-US", {
          month: "numeric",
          day: "2-digit",
          year: "numeric",
          hour: 'numeric', minute: 'numeric', second: 'numeric'
        }).format(new Date(checkin.createdAt))}</Text>} style={styles.paper}>
            <View key={checkin.id ? checkin.id : index} style={styles.checkin}>
              <Image style={styles.image} source={{uri: PlaceholderMap}}/>            
              <Text style={styles.checkinLocation}>Location: {checkin.location}</Text>
            </View>
          </Accordion>
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
    fontSize: 18,
    fontWeight: 'bold',
     marginVertical: 8,
  },
  bodyText: {
    fontSize: 18,
    fontWeight: 'normal',
     marginVertical: 8,
  },
  checkinLocation:{
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
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
  image: {
    height: 225,
    width: 300,
    alignItems: 'center',
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
