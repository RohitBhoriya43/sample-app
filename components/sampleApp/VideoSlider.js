import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';

const {height, width} = Dimensions.get('window');

const VideoSlider = ({data}) => {
  return (
    <View style={{marginTop: (19 / 844) * height}}>
      <View style={styles.slideView}></View>
      <View style={styles.slideName}>
        <Text style={styles.slideNameText}>Course 0</Text>
      </View>
      <View style={styles.reviewContainer}>
        <View style={styles.reviewCircle}></View>
        <View style={styles.reviewCircle}></View>
        <View style={styles.reviewCircle}></View>
        <View style={styles.reviewCircle}></View>
        <View style={styles.reviewCircle}></View>
        <View style={styles.reviewTextContainer}>
          <Text style={styles.textReview}>76</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>&#x20B9;1200</Text>
      </View>
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
    color: '#262626',
  },
  reviewContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: (7 / 844) * height,
    marginLeft: (80 / 390) * width,
  },
  reviewCircle: {
    height: (16 / 844) * height,
    width: (16 / 844) * height,
    backgroundColor: '#7B7B7B',
    marginRight: (2 / 390) * width,
    borderRadius: 50,
  },
  reviewTextContainer: {
    marginLeft: (6 / 390) * width,
  },
  textReview: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    color: '#262626',
  },
  priceContainer: {
    marginLeft: (110 / 390) * width,
    marginTop: (7 / 844) * height,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    color: '#262626',
  },
});

export default VideoSlider;
