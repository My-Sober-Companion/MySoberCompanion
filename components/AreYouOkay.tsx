import * as React from 'react';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AreYouOkay() {
  return (
    <View style={{width:'70%'}}>
        <Text style={styles.title}>Are you okay?</Text>
        <View style={styles.container}>
            <View style={styles.buttons}>
              <Button
                title="Yes"
                onPress={() => Alert.alert('Left button pressed')}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                title="No"
                onPress={() => Alert.alert('Right button pressed')}
              />
            </View>
        </View>
      <MessageInputMultiline style={styles.textbox}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const MessageInputMultiline = () => {
  const [value, onChangeText] = React.useState('Add a message');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View  style={{
        marginTop: 10,
        borderBottomColor: '#000000',
        borderWidth: 1,
      }}>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
     marginVertical: 8,
  },
  textbox: {
   
  },
  buttons: {
    width: '30%',
  },
  separator: {
    height: 1,
    width: '80%',
  },
});
