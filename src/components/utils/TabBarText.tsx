import React from 'react';
import { Text } from 'react-native';
import { useThemeMode } from '@rneui/themed';

const TabBarText = ({
  focused,
  title,
}: {
  focused: boolean;
  title: string;
}) => {
  const { mode } = useThemeMode();
  return (
    <Text
      style={{
        marginBottom: 5,
        color: focused
          ? mode === 'dark'
            ? '#fff'
            : '#000'
          : 'rgb(143, 155, 179)',
        fontSize: 12,
      }}
    >
      {title}
    </Text>
  );
};

export default TabBarText;
