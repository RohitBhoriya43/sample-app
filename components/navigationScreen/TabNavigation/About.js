import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.topView}>
      <View style={styles.secondView}>
        <Text style={styles.text}>Name:- Rohit</Text>
        <Text style={styles.text}>Gmail:- rohitbhoriya434@gmail.com</Text>
        <Text style={styles.text}>Role:- Frontend Developer</Text>
        <Text style={styles.text}>Address:- Village Murthal,City Sonipat</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#e1f7f1',
    padding: 20,
  },
  secondView: {
    padding: 10,
  },
  text: {
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 8,
    color: '#5b8c60',
  },
});

export default About;
