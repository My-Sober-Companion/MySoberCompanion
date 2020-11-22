import * as React from 'react';
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, Text, View } from '../components/Themed';
import PlaceholderMap from '../assets/images/map.png'
import { DataTable } from 'react-native-paper';
import P1 from '../assets/images/phoenix/1.png';
import P2 from '../assets/images/phoenix/2.png';
import P3 from '../assets/images/phoenix/3.png';
import P4 from '../assets/images/phoenix/4.png';
import P5 from '../assets/images/phoenix/5.png';
import P6 from '../assets/images/logo.png';
import Accordion from '../components/Accordion';

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
    date: '10/02/2020',
  },
  {
    name: 'Hatchling',
    picture: P2,
    requirement: '3 Hour Check In',
    date: '10/08/2020',
  },
  {
    name: 'Fledgling',
    picture: P3,
    requirement: '6 Hour Check In',
    date: '10/29/2020',
  },
  {
    name: 'Firecracker',
    picture: P4,
    requirement: '12 Hour Check In',
    date: '11/20/2020',
  },
  {
    name: 'Firebird',
    picture: P5,
    requirement: 'Daily Check In',
    date: '',
  },
  {
    name: 'Phoenix',
    picture: P6,
    requirement: 'Weekly Check In',
    date: '',
  },
];

export default function ProfileScreen() {
  const [isManageTeamOpen, setIsManageTeamOpen] = useState(false);
  const [isManageDenyOpen, setIsManageDenyOpen] = useState(false);
  const [isCurrentStatusOpen, setIsCurrentStatusOpen] = useState(false);
  function onPress() {
    alert('alter login credentials or security preferences');
  }
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          {isManageTeamOpen &&
            <Modal animationType="slide" style={styles.modal} transparent>
              <Button style={styles.button} title="X" onPress={() => setIsManageTeamOpen(!isManageTeamOpen)} />
              <ProfileManageTeam />
            </Modal>
          }
          {isManageDenyOpen &&
            <Modal animationType="slide" style={styles.modal} transparent>
              <Button style={styles.button} title="X" onPress={() => setIsManageDenyOpen(!isManageDenyOpen)} />
            <ProfileManageDenylist />
            </Modal>
          }
          {isCurrentStatusOpen &&
          <Modal animationType="slide" style={styles.modal} transparent>
          <Button style={styles.button} title="X" onPress={() => setIsCurrentStatusOpen(!isCurrentStatusOpen)} />
          <ProfileCurrentStatus />
          </Modal>
          }
          {!isManageTeamOpen && !isManageDenyOpen && !isCurrentStatusOpen &&
            <View style={styles.container}>
              <Separator/>
              <Text style={styles.title}>Manage Profile</Text>
              <Separator/>
              <Button style={styles.button} title="Login and Security >" onPress={onPress}/>
              <Button style={styles.button} title="Manage Team >" onPress={() => setIsManageTeamOpen(!isManageTeamOpen)}/>
              <Button style={styles.button} title="Manage Denylist >" onPress={() => setIsManageDenyOpen(!isManageDenyOpen)}/>
              <Button style={styles.button} title="Current Status >" onPress={() => setIsCurrentStatusOpen(!isCurrentStatusOpen)}/>
              <Separator/>
              <Image style={styles.titleImage} source={P6}/>
              <Separator></Separator>
            </View>
          }
        </View>
      </ScrollView>
    </View>
  );
}

export function ProfileManageTeam(){
  function onPress() {
    alert('Change team member settings');
  }
  function onPress2() {
    alert('Add or Remove team members');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Team Members</Text>
      <Separator/>
      <Accordion title={<Text style={styles.bodytext}>Team Member: Mom</Text>} style={styles.paper}>
        <Text style={styles.bodytext}>#: (123) 364-9372</Text>
        <Text style={styles.subtitle2}>Permissions:</Text>
        <Text style={styles.bodytext}>Point of Contact During an Emergency</Text>
        <Text style={styles.bodytext}>Daily Check Ins</Text>
        <Text style={styles.bodytext}>Notified in case of Denylist Violation</Text>
        <Button style={styles.button2} title="Edit" onPress={onPress}/>
      </Accordion>
      <Separator/>
      <Accordion title={<Text style={styles.bodytext}>Team Member: Sally</Text>} style={styles.paper}>
        <Text style={styles.bodytext}>#: (123) 468-6584</Text>
        <Text style={styles.subtitle2}>Permissions:</Text>
        <Text style={styles.bodytext}>Daily Check Ins</Text>
        <Button style={styles.button2} title="Edit" onPress={onPress}/>
      </Accordion>
      <Separator/>
      <Accordion title={<Text style={styles.bodytext}>Team Member: Bob (Sponsor)</Text>} style={styles.paper}>
        <Text style={styles.bodytext}>#: (123) 364-6565</Text>
        <Text style={styles.subtitle2}>Permissions:</Text>
        <Text style={styles.bodytext}>Notified in case of Denylist Violation</Text>
        <Button style={styles.button2} title="Edit" onPress={onPress}/>
      </Accordion>      
      <Separator/>
      <Button style={styles.button} title="Add/Remove" onPress={onPress2}></Button>
    </View>
  );
}

export function ProfileManageDenylist(){
  function onPress(){
    alert ('Change Denylist Entry')
  }
  function onPress2(){
    alert ('Add or Remove Denylist Entries')
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Manage Denylist Entries</Text>
      <Separator></Separator>
      <Accordion title={<Text style={styles.bodytext}>Bill's Phone</Text>} style={styles.paper}>
        <Text style={styles.subtitle}>Phone Number</Text>
        <Text style={styles.bodytext}>#: (456) 467-4656</Text>
        <Text style={styles.bodytext}>Flag: texts and calls</Text>
        <Text style={styles.bodytext}>Notify: Mom, Bob</Text>
        <Button style={styles.button2} title="Edit" onPress={onPress}/>
      </Accordion>
      <Separator/>
      <Accordion title={<Text style={styles.bodytext}>Blue Moon Bar</Text>} style={styles.paper}>
        <Text style={styles.subtitle}>Location</Text>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: PlaceholderMap}}/>
        </View>
        <Text style={styles.bodytext}>Flag: within 1 mile radius</Text>
        <Text style={styles.bodytext}>Notify: Mom, Bob</Text>
        <Button style={styles.button2} title="Edit" onPress={onPress}/>
      </Accordion>
      <Separator/>
      <Button style={styles.button} title="Add/Remove" onPress={onPress2}></Button>
    </View>
  )
}

export function ProfileCurrentStatus(){
  //have drop downs for current location, current health stats, and most recent check in?
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
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Current Status</Text>
      <Separator></Separator>
      <Text style={styles.subtitle}>Current Location:</Text>
      <Image style={styles.image} source={{uri: PlaceholderMap}}/>
      <Separator></Separator>
      <Text style={styles.subtitle}>Current Health Metrics:</Text>
      <HealthMetricsTable/>
      <Separator></Separator>
      <Text style={styles.subtitle}>Current Status Level:</Text>
      <Image style={styles.titleImage} source={P4}/>
      <Text style={styles.bodytext}>You're a Firecracker!</Text>
      <Separator></Separator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  titleImage: {
    height: 200,
    width: 200,
  },
  smallSeparator: {
    marginVertical: 8,
    height: 1,
    width: '100%',
  },
  image: {
    height: 150,
    width: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5
  },
  subtitle2:{
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 2.5
  },
  bodytext:{
    fontSize: 14
  },
  button: {
    marginVertical: 30,
    marginHorizontal: 15,
    color: 'blue',
    width: 'fit-content',
    alignSelf: 'center',
  },
  button2: {
    marginVertical: 5,
    marginHorizontal: 15,
    color: 'blue',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
  modal: {
    elevation: 2,
    borderColor: 'transparent',
    borderWidth: 0
  },
  paper: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.1,
    elevation: 3,
    padding: 5,
    width: "100%"
  }
});
