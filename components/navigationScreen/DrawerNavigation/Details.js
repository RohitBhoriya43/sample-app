import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Details = ({navigation}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 20,
        left: 125,
      }}>
      <Text style={{fontSize: 30}}>Details!</Text>

      <View style={styles.button}>
        <Button title="open Drawer" onPress={() => navigation.openDrawer()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
