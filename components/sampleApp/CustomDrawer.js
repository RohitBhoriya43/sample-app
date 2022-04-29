import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';

// import {} from "@react-navigation/drawer"
import CameraIcon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import CameraScreen from './CameraScreen';
import {Camera} from 'react-native-vision-camera';

const {height, width} = Dimensions.get('window');
const CustomDrawer = ({navigation, path}) => {
  const [image, setImage] = useState(
    'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
  );

  console.log(path);

  const cameraPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();

    return navigation.navigate('Camera');
  };

  // console.log(route.params);

  // const takePicture = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     // cropping: true,
  //     // enableRotationGesture: true,
  //     useFrontCamera: true,
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //   });
  // };
  return (
    <View style={{flex: 1, height: height}}>
      <View>
        <TouchableOpacity
          style={styles.closeDrawerButton}
          onPress={() => navigation.closeDrawer()}>
          <Image
            style={styles.closeDrawer}
            source={require('demo/components/assests/images/close.png')}
          />
        </TouchableOpacity>

        <Text style={styles.profile}>Picture</Text>
        <View>
          {/* <View
            style={{
              backgroundColor: 'red',
              height: (80 / 844) * height,
              width: (80 / 844) * height,
              top: (10 / 844) * height,
              left: (103 / 390) * width,
              alignItems: 'center',
            }}> */}
          {path ? (
            <Image
              style={styles.pictureContainer}
              source={{uri: `file://${path}`}}
              resizeMode="stretch"
            />
          ) : (
            <Image
              style={styles.pictureContainer}
              source={{uri: image}}
              resizeMode="stretch"
            />
          )}

          {/* </View> */}
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={cameraPermission}>
            <CameraIcon name="camera-outline" size={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.fullName}>Rohit Bhoriya</Text>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 01</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 02</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 03</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 04</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 05</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionText}>Option 06</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeDrawerButton: {
    marginTop: (29.08 / 844) * height,
    marginLeft: (241.08 / 390) * width,
  },
  closeDrawer: {
    height: (19.83 / 844) * height,
    width: (19.83 / 844) * height,
  },

  profile: {
    textAlign: 'center',
    marginTop: (9.08 / 844) * height,
    color: '#262626',
    fontSize: 18,
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontStyle: 'normal',
  },

  cameraButton: {
    position: 'absolute',
    height: (36 / 844) * height,
    width: (36 / 844) * height,
    borderWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: (150 / 390) * width,
    marginBottom: (10 / 844) * height,
    backgroundColor: '#C4C4C4',
    zIndex: 1,
  },
  pictureContainer: {
    // position: 'absolute',
    height: (80 / 844) * height,
    width: (80 / 844) * height,
    // borderWidth: 1,
    borderColor: '#ff0000',
    top: (10 / 844) * height,
    left: (103 / 390) * width,
    borderRadius: 50,
    // tintColor: '#fff',
    alignItems: 'center',
    zIndex: -2,
  },
  // profileImage: {
  //   height: (80 / 844) * height,
  //   width: (80 / 844) * height,

  //   borderRadius: 50,
  //   zIndex: -2,
  // },

  fullName: {
    color: '#262626',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    marginLeft: (100 / 390) * width,
    marginTop: (30 / 844) * height,
  },
  optionContainer: {
    height: (288 / 844) * height,
    width: (220 / 390) * width,

    marginTop: (32 / 844) * height,
    marginLeft: (34 / 390) * width,
    justifyContent: 'space-around',
  },
  optionText: {
    color: '#262626',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Rubik',
  },
});

export default CustomDrawer;
