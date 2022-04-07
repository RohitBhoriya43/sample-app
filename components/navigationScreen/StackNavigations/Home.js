import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => {
  const users = [
    {name: 'rohit'},
    {name: 'himanshu'},
    {name: 'gaurav'},
    {name: 'sandeep'},
    {name: 'ayush'},
    {name: 'deepak'},
    {name: 'jitender'},
  ];
  return (
    <View>
      <Text onPress={() => console.warn('this is home screen')}>
        Home Screen
      </Text>
      <Button
        style={{margin: 20}}
        title="go to user"
        onPress={() => navigation.push('User', users)}
      />
      <Button
        title="random id"
        onPress={() =>
          navigation.push('RandomId', {id: Math.floor(Math.random() * 1000)})
        }
      />
    </View>
  );
};

export default Home;
