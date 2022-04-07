import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button title="open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default Home;
