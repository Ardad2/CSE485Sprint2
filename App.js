import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/HomeScreen/HomeScreen';
import Settings from './Settings';
import { Ionicons } from '@expo/vector-icons';

import HomeStackScreen from './screens/HomeScreen/HomeStackScreen';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const BottomTab = createBottomTabNavigator();

function AuthStack() {

}

function AuthenticatedStack() {
  return (
    <BottomTab.Navigator initialRouteName="Home" >

    <BottomTab.Screen 
    name="Home" 
    component={HomeStackScreen}
    options = {{ headerShown: false, tabBarLabel: 'Today', tabBarIcon: ({color, size}) => (
      <Ionicons name="home-outline" size="25px"/>
    ), 
  
  
  
  }} 
    />
    <BottomTab.Screen 
    name="Habit Stat" 
    component={Home}  
      options = {{ tabBarLabel: 'Habit Stat', tabBarIcon: ({color, size}) => (
              <Ionicons name="document-text-outline" size="25px"/>
            ), }} 
    />
    <BottomTab.Screen 
    name="Group" 
    component={Home} 
    options = {{ tabBarLabel: 'Group', tabBarIcon: ({color, size}) => (
      <Ionicons name="people-outline" size="25px"/>
    ), }} 
    />
    <BottomTab.Screen 
    name="Report" 
    component={Home}
    options = {{ tabBarLabel: 'Report', tabBarIcon: ({color, size}) => (
      <Ionicons name="clipboard-outline" size="25px"/>
    ), }} 
     />
    <BottomTab.Screen 
    name="Settings" 
    component={Settings} 
    options = {{ tabBarLabel: 'Settings', tabBarIcon: ({color, size}) => (
      <Ionicons name="cog-outline" size="25px"/>
    ), }} 
    />
  </BottomTab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer> 
      <AuthenticatedStack/>
    </NavigationContainer>
  );
}

export default function App() {



  return (
    <Provider store={store}> 
    <Navigation />
    </Provider>
  );
}
