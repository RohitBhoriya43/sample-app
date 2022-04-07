import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {AuthContext} from './context';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  const handleSignIn = () => {
    if (email === '') {
      alert('Email/UserName Field is Empty');
    } else if (password === '') {
      alert('Password Field is Empty');
    } else {
      signIn();
    }
  };

  return (
    <View style={{marginTop: 30}}>
      <TextInput
        style={styles.input}
        placeholder="Enter your UserName/Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSignIn}>
          SignIn
        </Text>
      </View>
      <View style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('SignUp')}>
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
    borderBottomWidth: 0.5,
    padding: 10,
    borderColor: '#a2bdaf',

    // borderRadius: 10,
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
});

export default SignIn;
