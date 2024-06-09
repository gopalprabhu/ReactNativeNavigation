import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  var text3 = Number(text1) + Number(text2);
  return (
    <View style={styles.container}>
      <Text>Home Screen </Text>
      <Text>Provide two numbers for addition </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="enter 1st number"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="enter 2nd number"
      />

      <Button
        title="Add"
        onPress={() => {
          const result = Number(text1) + Number(text2);
          navigation.navigate('Chat', {result: result});
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4dffff',
  },
  input: {
    backgroundColor: '#ffffff',
    width: '60%',
    borderRadius: 5,
    margin: 5,
  },
});
