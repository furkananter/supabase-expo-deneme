import React from 'react';
import { View, Text } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Profile = ({
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
        <Text>This is the Profile tab</Text>
      </View>
    </>
  );
};

export default Profile;
