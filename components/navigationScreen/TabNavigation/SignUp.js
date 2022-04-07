import React, {useContext, useState} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AuthContext} from './context';

const SignUp = () => {
  const {signUp} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModalMethod = ({navigation}) => {
    if (name === '') {
      alert('Name Field is Empty');
    } else if (email === '') {
      alert('Email Field is Empty');
    } else if (password === '') {
      alert('Password Field is Empty');
    } else {
      alert('Your Account is Successfully Created');
      signUp();
    }
  };
  return (
    <View style={{marginTop: 30}}>
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        onChangeText={text => setPassword(text)}
        maxLength={10}
      />
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={openModalMethod}>
          SignUp
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    borderWidth: 0.5,
    padding: 10,
    borderColor: '#a2bdaf',
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    marginLeft: 100,
    backgroundColor: '#8cd49c',
    width: 150,
    height: 40,
    borderRadius: 30,
  },
  buttonText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 20,
  },

  formData: {
    marginTop: 10,
  },
  formDataText: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    marginTop: 13,
    fontSize: 15,
  },
});

export default SignUp;
