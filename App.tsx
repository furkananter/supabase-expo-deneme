import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyBottomSheet from './src/components/MyBottomSheet';
import Navigation from './src/navigation';
import { AuthProvider } from './src/provider/AuthProvider';

export default function App() {
  // const images = [
  //   require("./assets/images/login.png"),
  //   require("./assets/images/register.png"),
  //   require("./assets/images/forget.png"),
  // ];
  return (
    <>
      {/* <AuthProvider> */}
      <Navigation />
      {/* </AuthProvider> */}
    </>
  );
}
