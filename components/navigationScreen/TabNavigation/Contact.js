import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const openModalMethod = () => {
    setOpenModal(!openModal);
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
        placeholder="Enter your Phone Number"
        onChangeText={text => setPhone(text)}
        keyboardType="number-pad"
        maxLength={10}
      />
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={openModalMethod}>
          Submit
        </Text>
      </View>
      <Modal
        animationType="slide"
        visible={openModal}
        presentationStyle="fullScreen"
        onRequestClose={() => setOpenModal(!openModal)}>
        <View style={{flex: 1}}>
          <View style={styles.modalContainer}>
            <View style={styles.formData}>
              <Text style={styles.formDataText}>{name}</Text>
              <Text style={styles.formDataText}>{email}</Text>
              <Text style={styles.formDataText}>{phone}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Text style={styles.modalButtonText} onPress={openModalMethod}>
                Back
              </Text>
            </View>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: 250,
    backgroundColor: '#e6f7bc',
    margin: 50,
    borderRadius: 30,
  },
  buttonContainer: {
    height: 30,
    width: 100,
    backgroundColor: '#0f0f0f',
    marginTop: 40,
    borderRadius: 20,
  },
  modalButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
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
    fontSize: 20,
  },
});

export default Contact;
