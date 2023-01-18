import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ImageBackground
} from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "./screens/SplashScreen";
import Home from "./screens/Home";


export default function App() {
  return <AppContainer />;
}
const switchNavigator = createSwitchNavigator({
  SplashScreen: { screen: SplashScreen },
  Home: {screen: Home},
  
  
});
const AppContainer = createAppContainer(switchNavigator);
