import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View>
        <Text>URL : {process.env.SUPABASE_URL}</Text>
        <Text>KEY: {process.env.SUPABASE_KEY}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Navigation;
