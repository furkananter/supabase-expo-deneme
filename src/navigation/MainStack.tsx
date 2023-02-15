import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from '../screens/SecondScreen';
import { MainStackParamList } from '../types/navigation';
import MainTabs from './MainTabs';

const Main = createNativeStackNavigator<MainStackParamList>();
const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen name="MainTabs" component={MainTabs} />
      <Main.Screen name="SecondScreen" component={SecondScreen} />
    </Main.Navigator>
  );
};

export default MainStack;
