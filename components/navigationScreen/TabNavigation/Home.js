import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {AuthContext} from './context';

const Home = () => {
  const {signOut} = React.useContext(AuthContext);
  const image = {};
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('demo/components/assests/images/man-g9840a2d29_1920.png')}
        resizeMode="center"
        style={styles.image}
      />
      <View style={styles.button}>
        <Text style={styles.buttonText} onPress={() => signOut()}>
          LogOut
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
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
});

export default Home;
