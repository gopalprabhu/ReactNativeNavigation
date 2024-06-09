import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PostScreen from '../screens/PostScreen';
import FindScreen from '../screens/FindScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Post" component={PostScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      {/* <Drawer.Screen name="Chat" component={ChatScreen} /> */}
      <Drawer.Screen name="Find" component={FindScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
