import React from 'react';
import { View, Text, Button } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'MainTabs'>) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>This is the About tab</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
};
