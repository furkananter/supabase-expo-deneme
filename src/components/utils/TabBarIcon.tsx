import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { themeColor, useTheme } from 'react-native-rapi-ui';

const TabBarIcon = ({ icon, focused }: { icon: any; focused: boolean }) => {
  const { isDarkmode } = useTheme();
  return (
    <Ionicons
      name={icon}
      size={24}
      style={{ marginBottom: -7 }}
      color={
        focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.primary
          : 'rgb(143, 155, 179)'
      }
    />
  );
};

export default TabBarIcon;
