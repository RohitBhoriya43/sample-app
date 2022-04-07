import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

// const {height, width} = Dimensions.get('screen');
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const [phone, setPhone] = React.useState('');
  // console.warn(
  //   `height in screen ${windowHeight} or width is screen ${windowWidth} `,
  // );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#fff', height: windowHeight}}>
        <View style={styles.topContainer}>
          <Image
            style={styles.logoImage}
            source={require('demo/components/assests/images/StockIcon.png')}
          />
          <Image
            style={styles.loginImage}
            source={require('demo/components/assests/images/startup.png')}
            resizeMode="stretch"
          />
        </View>
        <Text style={styles.loginText}>Log in</Text>
        <Text style={styles.phoneText}>Phone no.</Text>
        <TextInput
          placeholder="Enter phone no."
          style={styles.input}
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={text => setPhone(text)}
        />
        <TouchableOpacity
          disabled={phone.length === 10 ? false : true}
          style={phone.length === 10 ? styles.enableButton : styles.loginButton}
          onPress={() => navigation.push('Verification', phone)}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AppleGoogleButton}>
          <Image
            resizeMode="stretch"
            style={styles.appleLogo}
            source={require('demo/components/assests/images/logo-apple.png')}
          />
          <Text style={styles.AppleGoogleButtonText}>Log in with Apple ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AppleGoogleButton}>
          <Image
            resizeMode="stretch"
            style={styles.googleLogo}
            source={require('demo/components/assests/images/googleIcon1.png')}
          />
          <Text style={styles.AppleGoogleButtonText}>Log in with Google</Text>
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.signupText}>New on StockCourse?</Text>
          <TouchableOpacity>
            <Text style={styles.signupButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // logoContainer: {
  //   width: '100%',
  //   height: '100%',
  // },
  topContainer: {
    // borderWidth: 1,
    // borderColor: 'black',
    // marginBottom: (77 / 844) * windowHeight,
  },
  logoImage: {
    marginTop: (61 / 844) * windowHeight,
    height: (44 / 844) * windowHeight,
    width: (88 / 390) * windowWidth,
    // textAlign: 'center',
    // fontFamily: 'Rubik',
    // color: '#000',
    // fontSize: 36,
    // fontStyle: 'normal',
    // fontWeight: 'bold',
    marginLeft: (151 / 390) * windowWidth,

    // borderWidth: 1,
    // borderColor: 'black',
  },
  loginImage: {
    height: (194 / 844) * windowHeight,
    width: (303 / 390) * windowWidth,
    marginTop: (40 / 844) * windowHeight,
    marginLeft: (41 / 390) * windowWidth,
    // marginBottom: (60 / 844) * windowHeight,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  loginText: {
    marginTop: (77 / 844) * windowHeight,
    marginLeft: (26 / 390) * windowWidth,
    fontSize: 24,
    lineHeight: 28,
    color: '#333333',
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontStyle: 'normal',
    // marginBottom: (35 / 844) * windowHeight,
    opacity: 0.8,
  },
  phoneText: {
    marginTop: (35 / 844) * windowHeight,
    marginLeft: (26 / 390) * windowWidth,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#333333',
    opacity: 0.8,
    // marginBottom: (14 / 844) * windowHeight,
  },
  input: {
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    // marginTop: ( / 844) * windowHeight,
    width: (342 / 390) * windowWidth,
    marginLeft: (24 / 390) * windowWidth,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    paddingBottom: -30,
    opacity: 0.5,
    marginBottom: (32 / 844) * windowHeight,
  },
  loginButton: {
    height: (48 / 844) * windowHeight,
    width: (342 / 390) * windowWidth,
    backgroundColor: '#D6D6D6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: (24 / 390) * windowWidth,
    marginBottom: (16 / 844) * windowHeight,

    borderRadius: 8,
  },
  enableButton: {
    height: (48 / 844) * windowHeight,
    width: (342 / 390) * windowWidth,
    backgroundColor: '#ff6a00',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: (24 / 390) * windowWidth,
    marginBottom: (16 / 844) * windowHeight,

    borderRadius: 8,
  },
  buttontext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',

    lineHeight: 20,
  },
  AppleGoogleButton: {
    position: 'relative',
    height: (48 / 844) * windowHeight,
    width: (342 / 390) * windowWidth,
    marginBottom: (16 / 844) * windowHeight,
    marginLeft: (24 / 390) * windowWidth,

    backgroundColor: '#fff',
    borderColor: '#666666',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  AppleGoogleButtonText: {
    color: '#000000',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
  appleLogo: {
    position: 'absolute',

    height: (30 / 844) * windowHeight,
    width: (21 / 309) * windowWidth,
    left: 10,
  },
  googleLogo: {
    position: 'absolute',

    height: (30 / 844) * windowHeight,
    width: (21 / 309) * windowWidth,
    left: 10,
  },
  signupText: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
    opacity: 0.8,
    lineHeight: 18,
    marginTop: (24 / 844) * windowHeight,
    marginLeft: (100 / 390) * windowWidth,
  },
  signupButtonText: {
    // position: 'absolute',
    fontSize: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontStyle: 'normal',
    opacity: 0.8,
    lineHeight: 18,
    marginTop: (24 / 844) * windowHeight,
    marginLeft: (2 / 390) * windowWidth,
    // marginBottom: (1 / 844) * windowHeight,
    color: '#2775EB',
  },
});

// const styles = StyleSheet.create({
//   logoView: {
//     height: 50,
//     width: 50,
//     position: 'absolute',
//     top: 10,
//     left: '45%',
//   },
//   imageContainer: {
//     height: 40,
//     width: 40,
//   },
//   imageView: {
//     position: 'absolute',
//     top: 70,
//     left: 57,
//   },
//   loginImage: {
//     height: '22.98%',
//     width: '77.7%',
//   },

//   input: {
//     position: 'absolute',
//     top: 342,
//     left: 30,
//     borderBottomColor: 'grey',
//     borderBottomWidth: 0.5,
//     width: 300,
//     height: 40,
//     fontSize: 16,
//     paddingBottom: -20,
//     opacity: 0.5,
//   },
//   text: {
//     position: 'absolute',
//     top: 288,
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     left: 20,
//   },
//   textPhone: {
//     position: 'absolute',
//     top: 330,
//     left: 25,
//     color: 'black',
//     fontSize: 14,
//     fontWeight: 'normal',
//   },
//   loginButton: {
//     position: 'absolute',
//     top: 410,
//     left: 30,
//     height: 35,
//     width: 300,
//     backgroundColor: '#D6D6D6',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   enableButton: {
//     backgroundColor: '#ff6a00',
//     position: 'absolute',
//     top: 410,
//     left: 30,
//     height: 35,
//     width: 300,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   buttontext: {
//     color: 'white',
//     fontSize: 16,
//   },
//   AppleButton: {
//     position: 'absolute',
//     top: 460,
//     left: 30,
//     height: 35,
//     width: 300,
//     backgroundColor: 'white',
//     borderColor: 'black',
//     borderWidth: 1,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   AppleButtonText: {
//     color: 'black',
//     fontSize: 16,
//   },
//   googleButton: {
//     position: 'absolute',
//     top: 510,
//     left: 30,
//     height: 35,
//     width: 300,
//     backgroundColor: 'white',
//     borderColor: 'black',
//     borderWidth: 1,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   googleButtonText: {
//     color: 'black',
//     fontSize: 16,
//   },
//   appleGoogleLogo: {
//     position: 'absolute',
//     height: 25,
//     width: 25,
//     left: 10,
//   },
// });

export default Login;
