import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert, ImageBackground, Image, StyleSheet} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
export default class MyHeader extends Component{
  render(){
    return(
        <Header
           leftComponent={<Image
           source={require('../assets/Logof.png')}
            style={{ width: 40, height: 40, }}
          />}
          centerComponent={{ text: this.props.title, style: { color: 'yellow', fontSize:30,fontWeight:"bold", } }}
          rightComponent={<Image
           source={require('../assets/Avalon.png')}
            style={{ width: 30, height: 40, }}
          />}
          backgroundColor = "black"
        />

)
}

}