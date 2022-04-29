import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../navigationScreen/TabNavigation/About';
import Contact from '../navigationScreen/TabNavigation/Contact';
import Dashboard from './Dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? '#000' : '#000';
            size = focused ? 25 : 20;
          } else if (route.name === 'About') {
            iconName = focused ? 'book-outline' : 'book-outline';
            color = focused ? '#000' : '#000';
            size = focused ? 25 : 20;
          } else if (route.name === 'Contact') {
            iconName = focused ? 'earth-outline' : 'earth-outline';
            color = focused ? '#000' : '#000';
            size = focused ? 25 : 20;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f7f5d7',

        tabBarActiveBackgroundColor: '#f2edf2',
        tabBarInactiveBackgroundColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 15,
          color: '#000',
          // marginTop: -40,
        },
      })}

      // screenOptions={{
      //   headerShown: false,
      //   tabBarActiveBackgroundColor: '#E5E5E5',

      //   tabBarLabelStyle: {
      //     fontSize: 16,
      //     // color: '#E5E5E5',
      //   },
      // }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Home'}}
      />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
