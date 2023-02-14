import React from 'react';
import { Text, useTheme, themeColor } from 'react-native-rapi-ui';

const TabBarText = ({
  focused,
  title,
}: {
  focused: boolean;
  title: string;
}) => {
  const { isDarkmode } = useTheme();
  return (
    <Text
      fontWeight="bold"
      style={{
        marginBottom: 5,
        color: focused
          ? isDarkmode
            ? themeColor.white100
            : themeColor.primary
          : 'rgb(143, 155, 179)',
        fontSize: 12,
      }}
    >
      {title}
    </Text>
  );
};

export default TabBarText;
