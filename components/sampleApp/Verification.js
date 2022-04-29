import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Verification = ({navigation, route}) => {
  const otp1Ref = React.useRef(null);
  const otp2Ref = React.useRef(null);
  const otp3Ref = React.useRef(null);
  const otp4Ref = React.useRef(null);

  // const [pin, setPin] = React.useState({
  //   pin1: '',
  //   pin2: '',
  //   pin3: '',
  //   pin4: '',
  // });

  // const { pin1, pin2, pin3, pin4 } = pin;

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  useEffect(() => {
    if (pin1 === '') otp1Ref.current.focus();
  }, []);

  // console.warn(pin4.length);
  return (
    <View style={{flex: 1, height: height}}>
      <View style={styles.headingContainer}>
        <Text style={[styles.sameFont, styles.headingText]}>
          Enter the{' '}
          <Text style={{fontWeight: 'bold', color: 'black'}}>4 digit</Text> OTP
          Which you have received on your mobile no.
        </Text>
        <View style={styles.phoneContainer}>
          <Text style={[styles.sameFont, styles.phoneText]}>
            +91 - {route.params}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.editPhoneButton}>
            <Text style={[styles.sameFont, styles.editButtonText]}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="phone-pad"
          ref={otp1Ref}
          onChangeText={text => {
            // console.log('TEXT IN pin1', text);

            if (text != '') {
              // setPin({...pin, pin1: text});
              setPin1(text);
              otp2Ref.current.focus();
            }
            // setPin({...pin, pin1: text});
            // if (pin.pin1 !== null) {
            //   otp2Ref.current.focus();
            // }
          }}
          textAlign="center"
          style={styles.otpInput}
          maxLength={1}
        />

        <TextInput
          keyboardType="phone-pad"
          ref={otp2Ref}
          onChangeText={text => {
            // console.log('TEXT IN  pin2  ', text);
            setPin2(text);

            if (text != '') {
              // console.log('INsiDE pin2 jump  ');
              otp3Ref.current.focus();
            }
          }}
          onKeyPress={({nativeEvent}) => {
            console.log(pin2);
            if (nativeEvent.key === 'Backspace' && pin2 == '') {
              otp1Ref.current.focus();
            }
          }}
          textAlign="center"
          style={styles.otpInput}
          maxLength={1}
        />

        <TextInput
          keyboardType="phone-pad"
          ref={otp3Ref}
          onChangeText={text => {
            setPin3(text);

            if (text != '') {
              otp4Ref.current.focus();
            } else if (text.length === 1) {
              otp4Ref.current.focus();
            }
          }}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && pin3 == '') {
              otp2Ref.current.focus();
            }
          }}
          textAlign="center"
          style={styles.otpInput}
          maxLength={1}
        />

        <TextInput
          keyboardType="phone-pad"
          ref={otp4Ref}
          onChangeText={text => {
            setPin4(text);
          }}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && pin4.length === 0) {
              otp3Ref.current.focus();
            }
          }}
          textAlign="center"
          style={styles.otpInput}
          maxLength={1}
        />
      </View>

      <View style={styles.resendButtonContainer}>
        <Text style={[styles.sameFont, styles.codeText]}>
          Code not received?
        </Text>
        <TouchableOpacity style={styles.resendButton}>
          <Text style={[styles.sameFont, styles.resendButtonText]}>Resend</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Drawer')}
        disabled={
          pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== ''
            ? false
            : true
        }
        style={
          pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== ''
            ? [styles.disableSubmitButton, styles.enableSubmitButton]
            : styles.disableSubmitButton
        }>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    width: (303 / 390) * width,
    marginTop: (58 / 844) * height,
    marginLeft: (44 / 390) * width,
    // borderWidth: 1,
  },
  headingText: {
    marginLeft: (24 / 390) * width,
    color: '#000',
    fontSize: 18,
  },
  phoneContainer: {
    flexDirection: 'row',
    marginLeft: (70 / 390) * width,
  },
  phoneText: {
    fontSize: 18,
    color: '#000',
  },
  editPhoneButton: {
    marginTop: (3 / 844) * height,
    marginLeft: (5 / 390) * width,
  },
  editButtonText: {
    color: '#2775EB',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: (43 / 844) * height,
    justifyContent: 'center',
    // borderWidth: 1,
  },
  otpInput: {
    width: (25 / 390) * width,
    marginRight: (24 / 390) * width,
    borderBottomWidth: 1,
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  resendButtonContainer: {
    marginTop: (32 / 844) * height,

    marginLeft: (107 / 390) * width,
    flexDirection: 'row',

    // borderWidth: 1,
  },
  codeText: {
    fontSize: 14,
    color: '#333333',
    opacity: 0.8,
  },
  resendButton: {
    left: (3 / 390) * width,
  },
  sameFont: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  resendButtonText: {
    color: '#2775EB',
    fontSize: 14,
  },
  disableSubmitButton: {
    width: (342 / 390) * width,
    height: (48 / 844) * height,
    marginTop: (126 / 844) * height,
    marginLeft: (24 / 390) * width,
    backgroundColor: '#7B7B7B',
    borderRadius: 8,
  },
  enableSubmitButton: {
    backgroundColor: '#ff6a00',
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginTop: (12 / 844) * height,
  },
});

export default Verification;
