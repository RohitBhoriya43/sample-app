import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const RandomUserId = ({navigation, route}) => {
  const [id, setId] = useState(route.params.id);
  const generateRandomNumber = () => {
    setId(Math.floor(Math.random() * 1000));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Random id Generator</Text>
      <Text style={styles.text}>{id}</Text>
      <Button
        style={styles.button}
        title="Random id"
        onPress={generateRandomNumber}
      />
      <Button
        style={styles.button}
        title="go to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    margin: 20,
  },
  button: {
    paddingBottom: 30,
  },
});

export default RandomUserId;
