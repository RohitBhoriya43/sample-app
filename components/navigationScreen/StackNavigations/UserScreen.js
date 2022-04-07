import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

const UserScreen = ({route, navigation}) => {
  //   console.warn(route);
  const users = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Text style={styles.listText}>{item.name}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
      <Text style={styles.button} onPress={() => navigation.goBack()}>
        go to back
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 20,
    width: 100,
    height: 30,
    textAlign: 'center',
    paddingTop: 5,
  },
  listText: {
    margin: 5,
    backgroundColor: 'orange',
    width: 70,
    textAlign: 'center',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
  },
});

export default UserScreen;
