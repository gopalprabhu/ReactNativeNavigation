import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PostScreen from '../screens/PostScreen';
import FindScreen from '../screens/FindScreen';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen name="Post" component={PostScreen} />
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Settings" component={SettingsScreen} />
      {/* <Tab.Screen name="Chat" component={ChatScreen} /> */}
      <Tab.Screen name="Find" component={FindScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
