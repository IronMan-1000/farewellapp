import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  FlatList,
  ScrollView

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Icon } from 'react-native-elements';


import MyHeader from '../components/MyHeader';

import { WebView } from 'react-native-webview';
export default class Home extends Component {
  render() {
  return (
 
    <View style={{flex:1, backgroundColor:'grey'}}>
      <MyHeader title="Farewell" navigation={this.props.navigation} />
      <WebView
        style={styles.container}
        source={{ uri: 'https://farewell-sarbikdiyatech.vercel.app/' }}
      />
      </View>
     
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});