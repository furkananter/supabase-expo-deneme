import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useThemeMode } from '@rneui/themed';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import About from '../screens/About';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';
import { MainTabsParamList } from '../types/navigation';

const Tabs = createBottomTabNavigator<MainTabsParamList>();
const MainTabs = () => {
  const { mode } = useThemeMode();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: mode === 'dark' ? '#fff' : '#000',
          backgroundColor: mode === 'dark' ? '#000' : '#fff',
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="md-home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="person" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="About" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="ios-information-circle" focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
