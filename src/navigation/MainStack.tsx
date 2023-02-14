import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from '../screens/SecondScreen';
import { MainStackParamList } from '../types/navigation';

const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainTabs = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

export default MainTabs;
