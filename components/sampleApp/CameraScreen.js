import React, {useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import {useCameraDevices} from 'react-native-vision-camera';
import CameraIcon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../navigationScreen/TabNavigation/context';

const {height, width} = Dimensions.get('window');

const CameraScreen = ({navigation}) => {
  const {selfieImage} = React.useContext(AuthContext);
  const [backCamera, setBackCamera] = useState(false);
  const devices = useCameraDevices();
  const frontCam = devices.front;
  const backCam = devices.back;
  const camera = useRef(null);

  const [photo, setPhoto] = useState({});

  // console.warn(selfieImage);

  //   console.log(device);
  if (frontCam == null) {
    return <ActivityIndicator size={100} color="#000" />;
  }

  // console.warn(backCam);

  const takePicture = async () => {
    try {
      const photo = await camera.current.takePhoto({flash: 'off'});
      // selfieImage = photo.path;
      setPhoto(photo.path);
      console.log(photo.path);
    } catch (e) {
      console.log(e);
    }
  };

  // const savePath = () => console.warn(selfieImage);

  return (
    <View style={{flex: 1, height: height}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Image
            style={styles.lessThanIcon}
            source={require('demo/components/assests/images/lessThan.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Take a Photo</Text>
      </View>
      <View>
        {backCamera === true ? (
          <Camera
            style={styles.cameraView}
            ref={camera}
            device={backCam}
            isActive={true}
            photo={true}
          />
        ) : (
          <Camera
            style={styles.cameraView}
            ref={camera}
            device={frontCam}
            isActive={true}
            photo={true}
          />
        )}

        <TouchableOpacity
          style={styles.changeCameraButton}
          onPress={() => setBackCamera(!backCamera)}>
          <CameraIcon name="camera-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selfieButton}
          onPress={takePicture}></TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => navigation.navigate('Drawer', photo)}>
        <Text style={styles.buttontext}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  lessThanIcon: {
    height: (19 / 844) * height,
    width: (11.73 / 390) * width,
    marginTop: (34 / 844) * height,
    marginLeft: (24.67 / 390) * width,
  },
  headingText: {
    marginLeft: (102.6 / 390) * width,
    marginTop: (34 / 844) * height,
    color: '#262626',
    fontSize: 18,
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  cameraView: {
    height: (491 / 844) * height,
    width: (342 / 390) * width,
    borderRadius: 80,
    marginLeft: (24 / 390) * width,
    marginTop: (34 / 844) * height,
  },
  saveButton: {
    height: (48 / 844) * height,
    width: (342 / 390) * width,
    backgroundColor: '#7B7B7B',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: (24 / 390) * width,
    marginTop: (22 / 844) * height,
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
  changeCameraButton: {
    position: 'absolute',
    height: (48 / 844) * height,
    width: (42 / 390) * width,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left: (286 / 390) * width,
    top: (450 / 844) * height,
    backgroundColor: '#fffff33',
    opacity: 0.8,
    borderRadius: 8,
  },
  selfieButton: {
    height: (48 / 844) * height,
    width: (48 / 844) * height,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    backgroundColor: '#C4C4C4',
    borderRadius: 50,
    left: (172 / 390) * width,
    top: (450 / 844) * height,
  },
});

export default CameraScreen;
