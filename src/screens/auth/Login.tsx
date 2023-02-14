import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { supabase } from '../../initSupabase';
import { AuthStackParamList } from '../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'Login'>) {
  return (
    <View>
      <Text>LOGIN</Text>
    </View>
  );
}
