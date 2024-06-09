import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ChatScreen = ({route, navigation}) => {
  const {result} = route.params;
  return (
    <View style={styles.container}>
      <Text>Addition Result is:{result}</Text>
      <Button
        title="Go to Bottom tab demo"
        onPress={() => {
          navigation.navigate('BottomTabs');
        }}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
