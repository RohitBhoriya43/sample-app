import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import DashboardBottom from './BottomNavigation';
import {RenderItem} from './RenderItem';
import VideoSlider from './VideoSlider';

const {width, height} = Dimensions.get('window');

const renderVideo = ({item, index}) => {
  return (
    <View>
      <VideoSlider data={item} />
    </View>
  );
};

const Dashboard = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', height: height}}>
      <View style={styles.searchContainer}>
        <Image
          style={styles.hamburgerIcon}
          source={require('demo/components/assests/images/hamburgerIcon.png')}
        />

        <TextInput
          placeholderTextColor="#757575"
          style={styles.searchInput}
          placeholder="Search"
        />
      </View>
      <View
        style={{
          marginTop: (32 / 844) * height,
          marginLeft: (16 / 390) * width,
        }}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Intro to Stock Markets</Text>
          <Text style={styles.dummyText}>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>

      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}

        data={RenderItem}
        renderItem={renderVideo}
        sliderWidth={width}
        itemWidth={290}
        loop={true}
      />
      <View
        style={{
          marginTop: (135 / 844) * height,
          marginLeft: (16 / 390) * width,
        }}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Trading and Investing</Text>
          <Text style={styles.dummyText}>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          marginTop: (23 / 844) * height,
          marginLeft: (16 / 390) * width,
        }}
        horizontal>
        {RenderItem.map((item, index) => (
          <View key={index} style={styles.midScroll}></View>
        ))}
      </ScrollView>
      <View
        style={{
          marginTop: (134 / 844) * height,
          marginLeft: (16 / 390) * width,
        }}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Equities, Future and Options</Text>
          <Text style={styles.dummyText}>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>
      <ScrollView
        style={{
          marginTop: (23 / 844) * height,
          marginLeft: (16 / 390) * width,
        }}
        horizontal>
        {RenderItem.map((item, index) => (
          <View key={index} style={styles.midScroll}></View>
        ))}
      </ScrollView>
      <View style={styles.bottomNavigation}>{/* <DashboardBottom /> */}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    // borderColor: '#000',
    // borderWidth: 2,
  },
  hamburgerIcon: {
    height: (18 / 844) * height,
    width: (27 / 390) * width,
    marginTop: (33 / 844) * height,
    marginLeft: (20.5 / 390) * width,
  },
  searchInput: {
    height: (40 / 844) * height,
    width: (301 / 390) * width,
    marginTop: (22 / 844) * height,
    marginLeft: (21.5 / 390) * width,
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 4,
    // backgroundColor: '#FFFFFF',
    paddingLeft: (16 / 390) * width,
    paddingTop: (8 / 844) * height,
    fontSize: 16,
    // justifyContent: 'center',
    letterSpacing: 0.15,
  },
  headingContainer: {
    height: (72 / 844) * height,
    width: (355 / 390) * width,
    padding: 1,
    backgroundColor: '#fff',
    // borderColor: '#000',
    // borderWidth: 1,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Rubik',
    lineHeight: 22,
    // height: (22 / 844) * height,
    // width: (245 / 390) * width,
    // marginTop: (10 / 844) * height,
    color: '#262626',
  },
  dummyText: {
    marginTop: (9 / 844) * height,
    color: '#262626',
    fontSize: 17,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
  },
  midScroll: {
    height: (255 / 844) * height,
    width: (255 / 390) * width,
    backgroundColor: '#C4C4C4',
    marginRight: (15 / 390) * width,
  },
  bottomNavigation: {
    // height: (100 / 844) * height,
    width: width,
    marginTop: (111 / 844) * height,
    // backgroundColor: '#C4C4C4',
    // opacity: 0.1,
  },
});

export default Dashboard;
