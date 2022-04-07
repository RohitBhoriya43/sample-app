import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const ActiveLoader = () => {
  return (
    <View>
      <Text>ActiveLoader</Text>
      <ActivityIndicator color="skyblue" size="large" />
    </View>
  );
};

export default ActiveLoader;
