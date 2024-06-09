import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const FindScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Find Screen</Text>
      <Button
        title="Click Here to View Drawer Navigation Demo"
        onPress={() => navigation.navigate('DrawerHome')}
      />
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcf0bd',
  },
});
