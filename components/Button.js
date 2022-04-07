import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

const ButtonComponent = () => {
  const [randomNumber, setRandomNumber] = useState('random number');
  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 1000));
  };
  return (
    <View>
      <Text style={{fontSize: 20, margin: 100}}>{randomNumber}</Text>
      <Button title="Random Number" onPress={generateRandomNumber} />
    </View>
  );
};

export default ButtonComponent;
