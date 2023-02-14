import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { supabase } from '../../initSupabase';
import { AuthStackParamList } from '../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function ForgetPassword({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'ForgetPassword'>) {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <Text>Forget Password</Text>
    </View>
  );
}
