import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../navigationScreen/TabNavigation/About';
import Contact from '../navigationScreen/TabNavigation/Contact';
import Dashboard from './Dashboard';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="DashboardScreen"
        component={Dashboard}
        options={{title: 'Dashboard'}}
      />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;