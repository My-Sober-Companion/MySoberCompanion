import * as React from 'react';
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, Text, View } from '../components/Themed';
import PlaceholderMap from '../assets/images/map.png'

const Separator = () => (
  <View style={styles.separator} />
);

export default function ProfileScreen() {
  const [isManageTeamOpen, setIsManageTeamOpen] = useState(false);
  const [isManageDenyOpen, setIsManageDenyOpen] = useState(false);
  
  function onPress() {
    alert('alter login credentials or security preferences');
  }

  function onPress3() {
    alert('update list of phone numbers and places to avoid');
  }

  function onPress4() {
    alert('view current location and health metrics');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          {isManageTeamOpen ?
            <Modal animationType="slide" style={styles.modal} transparent>
              <Button style={styles.button} title="X" onPress={() => setIsManageTeamOpen(!isManageTeamOpen)}/>
              <ProfileManageTeam/>
            </Modal>
            :
            <View style={styles.container}>
              <Separator/>
              <Text style={styles.title}>Manage Profile Details</Text>
              <Separator/>
              <Button style={styles.button} title="Login and Security" onPress={onPress}/>
              <Button style={styles.button} title="Manage Team" onPress={() => setIsManageTeamOpen(!isManageTeamOpen)}/>
              <Button style={styles.button} title="Manage Denylist" onPress={onPress3}/>
              <Button style={styles.button} title="Current Status" onPress={onPress4}/>
              <Separator/>
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
  return (
    <View style={styles.container}>
      <Separator/>
      <Text style={styles.title}>Manage Team Members</Text>
      <Separator/>
      <Text style={styles.subtitle}>Team Member: Mom</Text>
      <Text style={styles.bodytext}>Phone Number: (123) 364-9372</Text>
      <Text style={styles.subtitle2}>Permissions:</Text>
      <Text style={styles.bodytext}>Point of Contact During an Emergency</Text>
      <Text style={styles.bodytext}>Daily Check Ins</Text>
      <Text style={styles.bodytext}>Notified in case of Denylist Violation</Text>
      <Button style={styles.button2} title="Edit" onPress={onPress}/>
      <Separator/>
      <Separator/>
      <Text style={styles.subtitle}>Team Member: Sally</Text>
      <Text style={styles.bodytext}>Phone Number: (123) 468-6584</Text>
      <Text style={styles.subtitle2}>Permissions:</Text>
      <Text style={styles.bodytext}>Daily Check Ins</Text>
      <Button style={styles.button2} title="Edit" onPress={onPress}/>
      <Separator/>
      <Separator/>
      <Text style={styles.subtitle}>Team Member: Bob (Sponsor)</Text>
      <Text style={styles.bodytext}>Phone Number: (123) 364-6565</Text>
      <Text style={styles.subtitle2}>Permissions:</Text>
      <Text style={styles.bodytext}>Notified in case of Denylist Violation</Text>
      <Button style={styles.button2} title="Edit" onPress={onPress}/>
      <Separator/>
    </View>
  );
}

export function ProfileManageDenylist(){
  function onPress(){
    alert ('Change Denylist Entry')
  }
  function onPress2(){
    alert ('Add Denylist Entry')
  }

  return(
    <View style={styles.container}>
      <Separator/>
      <Text style={styles.title}>Manage Denylist Entries</Text>
      <Separator></Separator>
      <Text style={styles.subtitle}>Phone Number</Text>
      <Text style={styles.bodytext}>#: (456) 467-4656</Text>
      <Text style={styles.bodytext}>Flag: texts and calls</Text>
      <Text style={styles.bodytext}>Notify: Mom, Bob</Text>
      <Button style={styles.button2} title="Edit" onPress={onPress}/>
      <Separator/>
      <Text style={styles.subtitle}>Location</Text>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: PlaceholderMap}}/>
      </View>
      <Text style={styles.bodytext}>Flag: within 1 mile radius</Text>
      <Text style={styles.bodytext}>Notify: Mom, Bob</Text>
      <Button style={styles.button2} title="Edit" onPress={onPress}/>
      <Separator/>
      <Button style={styles.button} title="Add" onPress={onPress2}></Button>
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
  image: {
    height: 150,
    width: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5
  },
  subtitle2:{
    fontSize: 10,
    fontWeight: 'bold',
    marginVertical: 2.5
  },
  bodytext:{
    fontSize: 10
  },
  button: {
    marginVertical: 30,
    marginHorizontal: 15,
    color: 'blue',
    width: 'fit-content',
    alignSelf: 'center'
  },
  button2: {
    marginVertical: 5,
    marginHorizontal: 15,
    color: 'blue'
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  modal: {
    elevation: 2,
    borderColor: 'transparent',
    borderWidth: 0
  }
});
