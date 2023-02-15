import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useThemeMode } from '@rneui/themed';

const TabBarIcon = ({ icon, focused }: { icon: any; focused: boolean }) => {
  const { mode } = useThemeMode();
  return (
    <Ionicons
      name={icon}
      size={24}
      style={{ marginBottom: -7 }}
      color={
        focused ? (mode === 'dark' ? '#fff' : '#000') : 'rgb(143, 155, 179)'
      }
    />
  );
};

export default TabBarIcon;
