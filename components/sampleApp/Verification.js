import React from 'react';
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

  const [pin, setPin] = React.useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
  });

  const {pin1, pin2, pin3, pin4} = pin;

  console.warn(pin4.length);
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>
          Enter the{' '}
          <Text style={{fontWeight: 'bold', color: 'black'}}>4 digit</Text> OTP
          Which you have received on your mobile no.
        </Text>
        <View style={styles.phoneContainer}>
          <Text style={styles.phoneText}>+91 - {route.params}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.editPhoneButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="phone-pad"
          ref={otp1Ref}
          onChangeText={text => {
            setPin({...pin, pin1: text});
            if (pin.pin1 !== null) {
              otp2Ref.current.focus();
            }
          }}
          textAlign="center"
          style={styles.otpInput}
          maxLength={1}
        />
        <TextInput
          keyboardType="phone-pad"
          ref={otp2Ref}
          onChangeText={text => {
            setPin({...pin, pin2: text});
            if (pin.pin2 !== null) {
              otp3Ref.current.focus();
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
            setPin({...pin, pin3: text});
            if (pin.pin3 !== null) {
              otp4Ref.current.focus();
            }
          }}
          onKeyPress={({nativeEvent}) => {}}
          textAlign="center"
          style={styles.otpInput}
          maxLength={1}
        />
        <TextInput
          keyboardType="phone-pad"
          ref={otp4Ref}
          onChangeText={text => setPin({...pin, pin4: text})}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'delete' && pin3.length === 1) {
              setPin({...pin, pin4: ''});
              otp3Ref.current.focus();
            } else if (nativeEvent.key === 'delete' && pin4.length === 0) {
              otp3Ref.focus();
            }
          }}
          textAlign="center"
          style={styles.otpInput}
          maxLength={1}
        />
      </View>

      <View style={styles.resendButtonContainer}>
        <Text style={styles.codeText}>Code not received?</Text>
        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendButtonText}>Resend</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomNavigation')}
        disabled={
          pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== ''
            ? false
            : true
        }
        style={
          pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== ''
            ? styles.enableSubmitButton
            : styles.disableSubmitButton
        }>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      {/* <View style={styles.resendButtonContainer}>
        <Text>Code not received?</Text>
        <TouchableOpacity>
          <Text>Resend</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Dashboard', {screen: 'DashboardScreen'})
        }
        disabled={
          pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== ''
            ? false
            : true
        }
        style={
          pin1 !== '' && pin2 !== '' && pin3 !== '' && pin4 !== ''
            ? styles.enableOtpButton
            : styles.disableOtpButton
        }>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    width: (302 / 390) * width,
    height: (70 / 844) * height,
    marginTop: (58 / 844) * height,
    marginLeft: (44 / 390) * width,
    // borderWidth: 1,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headingText: {
    marginLeft: (24 / 390) * width,
    color: '#000',
    fontSize: 18,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  phoneContainer: {
    position: 'relative',
    marginLeft: (70 / 390) * width,
  },
  phoneText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  editPhoneButton: {
    position: 'absolute',
    left: (140 / 390) * width,
    top: (3 / 844) * height,
  },
  editButtonText: {
    color: '#2775EB',
    fontSize: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  inputContainer: {
    // height: (300 / 844) * height,
    // width: (300 / 390) * width,
    marginTop: (43 / 844) * height,
    marginLeft: (84 / 390) * width,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // backgroundColor: 'black',
    // borderWidth: 2,
  },
  otpInput: {
    height: (52 / 844) * height,
    width: (25 / 390) * width,
    marginLeft: (24 / 390) * width,
    borderBottomWidth: 1,
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  resendButtonContainer: {
    position: 'relative',
    marginTop: (80 / 844) * height,
    // backgroundColor: 'red',
    marginLeft: (107 / 390) * width,

    // borderWidth: 1,
  },
  codeText: {
    fontSize: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#333333',
    opacity: 0.8,
  },
  resendButton: {
    position: 'absolute',
    left: (115 / 390) * width,
  },
  resendButtonText: {
    color: '#2775EB',
    fontSize: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
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
    width: (342 / 390) * width,
    height: (48 / 844) * height,
    marginTop: (126 / 844) * height,
    marginLeft: (24 / 390) * width,
    backgroundColor: '#ff6a00',
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginTop: (12 / 844) * height,
  },
});

export default Verification;
