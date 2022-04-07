import React, {useState} from 'react';
import {Button, FlatList, Modal, TextInput, View, Text} from 'react-native';

const SaveData = () => {
  const [allData, setAllData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const ShowData = () => {
    if (name === '') {
      console.warn('name field is empty');
    } else if (email === '') {
      console.warn('email field is empty');
    } else if (age === '') {
      console.warn('age field is empty');
    } else {
      setAllData({name, email, age});
    }
  };

  return (
    <View>
      <TextInput
        placeholder="enter your name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="enter your email"
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="enter your age"
        onChangeText={text => setAge(text)}
        keyboardType="number-pad"
      />
      <Button title="Add data" onPress={ShowData} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View>
          <Text>{data.name}</Text>
          <Text>{data.email}</Text>
          <Text>{data.age}</Text>
        </View>
      </Modal>

      <Button title="show modal" onPress={() => setModalVisible(true)} />
    </View>
  );
};

export default SaveData;
