import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, View } from '../components/Themed';

const Separator = () => (
  <View style={styles.separator} />
);

export default function ProfileScreen() {
  function onPress() {
    alert('alter login credentials or security preferences');
  }
  function onPress2() {
    alert('update teammembers and their access');
    //point to ProfileManageTeam()
  }

  function onPress3() {
    alert('update list of phone numbers and places to avoid');
  }

  function onPress4() {
    alert('view current location and health metrics');
  }

  return (
    <View style={styles.container}>
      <Separator/>
      <Text style={styles.title}>Manage Profile Details</Text>
      <Separator/>
      <Button style={styles.button} title="Login and Security" onPress={onPress}></Button>
      <Button style={styles.button} title="Manage Team" onPress={onPress2}></Button>
      <Button style={styles.button} title="Manage Denylist" onPress={onPress3}></Button>
      <Button style={styles.button} title="Current Status" onPress={onPress4}></Button>
      <Separator/>
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
      <Button style={styles.button2} title="Edit" onPress={onPress}></Button>
      <Separator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'blue'
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
});
