import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/Navigation/tabs';
import HomeScreen from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import FindScreen from './src/screens/FindScreen';
import ChatScreen from './src/screens/ChatScreen';
import DrawerHome from './src/screens/DrawerDemo';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home2">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTab} />
        <Stack.Screen name="Find" component={FindScreen} />
        <Stack.Screen name="DrawerHome" component={DrawerHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
