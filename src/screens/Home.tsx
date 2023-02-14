import React from 'react';
import { View, Text } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { supabase } from '../initSupabase';

import { Ionicons } from '@expo/vector-icons';

export default function Home({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'MainTabs'>) {
  return (
    <View style={{ flex: 1 }}>
      <Text>HOME</Text>
    </View>
  );
}
