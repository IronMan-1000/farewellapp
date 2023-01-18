import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';


export default class SplashScreen extends Component {
  goToHome = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../assets/back.jpeg')} style={styles.image}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
           source={require('../assets/Logof.png')}
            style={{ width: 250, height: 250, alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginTop: 150, marginLeft: 5 }}
          />
          
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: 'yellow',
              marginTop: 50,
            }}>
            {' '}
           Farewell 2022-23{' '}
          </Text>

          
           <Image
           source={require('../assets/music.gif')}
           style={{width: 400}}
           />
       
              
                <TouchableOpacity
                  style={{ width: 70,
                  height: 60, }}
                  onPress={this.goToHome}>
                  <Text style={styles.buttonText}>Tap In</Text>
                </TouchableOpacity>
              
              
        </View>
     </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
    image: {
    flex: 1,
    width: 500,
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'yellow',
    alignContent: 'center'
  }
});
