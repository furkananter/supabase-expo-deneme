import React from 'react';
import { View, Text, Button } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { supabase } from '../initSupabase';


export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'MainTabs'>) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>HOME</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      {/* Create a home page  */}
      <Button
        title="Logout"
        onPress={() => {
          supabase.auth.signOut();
        }}
      />
    </View>
  );
};
