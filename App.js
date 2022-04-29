import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import ActiveLoader from './components/ActiveLoader';
// import Button from './components/Button';
// import SaveData from './components/SaveData';
// import Popup from './components/Popup';
// import ImageScreen from './components/ImageScreen';

// bottom navigation components

// import Home from './components/navigationScreen/TabNavigation/Home';
// import Contact from './components/navigationScreen/TabNavigation/Contact';
// import About from './components/navigationScreen/TabNavigation/About';
// import SignIn from './components/navigationScreen/TabNavigation/SignIn';
// import SignUp from './components/navigationScreen/TabNavigation/SignUp';

// Stack navigation components

// import Home from './components/navigationScreen/StackNavigations/Home';
// import UserScreen from './components/navigationScreen/StackNavigations/UserScreen';
// import RandomUserId from './components/navigationScreen/StackNavigations/RandomUserId';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwsome from 'react-native-vector-icons/FontAwesome5';
import {AuthContext} from './components/navigationScreen/TabNavigation/context';

// drawer navigation components

import Home from './components/navigationScreen/DrawerNavigation/Home';
import Details from './components/navigationScreen/DrawerNavigation/Details';

import SplashScreen from 'react-native-splash-screen';
import Login from './components/sampleApp/Login';
import Verification from './components/sampleApp/Verification';
import Dashboard from './components/sampleApp/Dashboard';
import BottomNavigation from './components/sampleApp/BottomNavigation';
import DrawerNavigation from './components/sampleApp/DrawerNavigation';
import CustomDrawer from './components/sampleApp/CustomDrawer';
import CameraScreen from './components/sampleApp/CameraScreen';

// Stack navigation example --->--->

const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="User" component={UserScreen} />
//         <Stack.Screen name="RandomId" component={RandomUserId} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// Tab navigation example ---->---->

// const Tab = createBottomTabNavigator();
// const App = () => {
//   const [isSignIn, setIsSignIn] = useState(false);

//   React.useEffect(() => {
//     SplashScreen.hide();
//   });

//   const auth = useMemo(() => {
//     return {
//       signIn: () => {
//         setIsSignIn(true);
//       },
//       signUp: () => {
//         setIsSignIn(true);
//       },
//       signOut: () => {
//         setIsSignIn(false);
//       },
//     };
//   }, []);
//   return (
// <AuthContext.Provider value={auth}>
//   <NavigationContainer>
//     {isSignIn ? (
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           headerShown: false,
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//               color = focused ? '#07fae2' : '#f590f0';
//               size = focused ? 25 : 20;
//             } else if (route.name === 'Contact') {
//               iconName = focused ? 'book-outline' : 'book-outline';
//               color = focused ? '#07fae2' : '#f590f0';
//               size = focused ? 25 : 20;
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'earth-outline' : 'earth-outline';
//               color = focused ? '#07fae2' : '#f590f0';
//               size = focused ? 25 : 20;
//             }
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#f7f5d7',

//           tabBarActiveBackgroundColor: '#f2edf2',
//           tabBarInactiveBackgroundColor: 'gray',
//           tabBarLabelStyle: {
//             fontSize: 15,
//             color: '#fab62f',
//           },
//         })}>
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="Profile" component={About} />
//             <Tab.Screen name="Contact" component={Contact} />
//           </Tab.Navigator>
//         ) : (
//           <Stack.Navigator
//             initialRouteName="SignIn"
//             screenOptions={{
//               headerShown: false,
//             }}>
//             <Stack.Screen name="SignIn" component={SignIn} />
//             <Stack.Screen name="SignUp" component={SignUp} />
//           </Stack.Navigator>
//         )}
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// };

// Drawer navigation example ---->---->

// const Drawer = createDrawerNavigator();

// const App = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   });

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={props => <CustomDrawer {...props} />}
//         screenOptions={{
//           headerShown: false,

//           // headerStyle: {
//           //   backgroundColor: 'grey',
//           // },
//         }}>
//         <Drawer.Screen
//           name="Home"
//           component={Home}
//           options={{
//             drawerIcon: ({focused}) => {
//               return (
//                 <Ionicons
//                   name={focused ? 'home' : 'home-outline'}
//                   size={focused ? 25 : 20}
//                   color={focused ? '#07fae2' : '#f590f0'}
//                 />
//               );
//             },
//           }}
//         />
//         <Drawer.Screen
//           name="Details"
//           component={Details}
//           options={{
//             drawerIcon: ({focused}) => {
//               return (
//                 <Ionicons
//                   name={
//                     focused
//                       ? 'information-circle'
//                       : 'information-circle-outline'
//                   }
//                   size={focused ? 25 : 20}
//                   color={focused ? '#07fae2' : '#f590f0'}
//                 />
//               );
//             },
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

const App = () => {
  const imagePath = React.useMemo(() => {
    return {
      selfieImage: '',
    };
  });
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <AuthContext.Provider value={imagePath}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verification" component={Verification} />
          {/* <Stack.Screen name="BottomNavigation" component={BottomNavigation} /> */}
          <Stack.Screen name="Drawer" component={DrawerNavigation} />

          {/* <Stack.Screen name="Drawer" component={DrawerNavigation} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
