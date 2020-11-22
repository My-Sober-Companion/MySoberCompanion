import React, { useEffect, useState }  from 'react';
import { StyleSheet, Button, Alert, TextInput, Image } from 'react-native';
import Accordion from '../components/Accordion';
import { format, parseJSON } from 'date-fns'
import { Text, View } from '../components/Themed';
import { API, autoShowTooltip, graphqlOperation } from 'aws-amplify'
import { createCheckin } from '../graphql/mutations'
import { listCheckins } from '../graphql/queries'
import PlaceholderMap from '../assets/images/map.png'
import HealthMetrics from '../components/HealthMetrics';

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
      checkins.map((checkin, index) => (
          <Accordion title={<Text style={styles.bodyText}>{format(parseJSON(checkin.createdAt), 'M/d/yy p')}</Text>} style={styles.paper}>
            <View key={checkin.id ? checkin.id : index} style={styles.checkin}>
              <Text style={styles.checkinName}>Checked in with all teammates</Text>
              <Image style={styles.mapImage} source={{uri: PlaceholderMap}}/>
              <Text style={styles.checkinName}>Health Metrics Logged:</Text>
              <HealthMetrics />
            </View>
          </Accordion>
        ))
      }

    </View>
  );
}
// 2020-11-22T03:31:56.236Z
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
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
    margin: 'auto',
  },
  checkinName:{
    marginHorizontal: 'auto',
    marginVertical: 10,
  },
  singleCheckIn:{
    flexDirection: 'row',
    textAlign: 'center',
  },
  mapImage: {
    height: 150,
    width: 200,
    marginHorizontal: 'auto',
    marginVertical: 10,
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
