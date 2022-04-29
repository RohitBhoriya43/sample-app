import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import BottomNavigation from './BottomNavigation';

const {width, height} = Dimensions.get('window');

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({route}) => {
  // console.log(route);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: (286 / 390) * width,
          height: (768 / 844) * height,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} path={route.params} />}>
      <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
