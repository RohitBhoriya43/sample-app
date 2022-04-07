import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';

const {height, width} = Dimensions.get('window');

const VideoSlider = ({data}) => {
  return (
    <View style={{marginTop: (19 / 844) * height}}>
      <View style={styles.slideView}></View>
      {/* <View style={styles.slideName}>
        <Text style={styles.slideNameText}>Course 1</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  slideView: {
    borderRadius: 24,
    backgroundColor: '#A8A8A8',
    height: (340 / 844) * height,
    width: (273 / 390) * width,
    // backgroundColor: 'white',
    // marginLeft: (16 / 390) * width,
    // marginRight: (16 / 390) * width,
    // borderWidth: 1,
  },
  //   slideImage: {
  //     height: (340 / 844) * height,
  //     width: (267 / 390) * width,
  //     // borderWidth: 1,
  //     borderRadius: 24,
  //   },
  slideName: {
    marginTop: (19 / 844) * height,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
    color: 'black',
  },
  slideNameText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    marginLeft: (97 / 390) * width,
  },
});

export default VideoSlider;
