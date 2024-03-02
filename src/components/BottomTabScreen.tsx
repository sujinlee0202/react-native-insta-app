import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TabBarIconProps = {
  focused: boolean;
  size: number;
  color: string;
  route: {
    name: string;
  };
};

const Tab = createBottomTabNavigator();

const renderTabBarIcon = ({focused, size, color, route}: TabBarIconProps) => {
  let iconName: string = '';
  color = 'black';

  if (route.name === 'Home') {
    iconName = focused ? 'home-sharp' : 'home-outline';
  } else if (route.name === 'Search') {
    iconName = focused ? 'search' : 'search-outline';
  } else if (route.name === 'Activity') {
    iconName = focused ? 'heart' : 'heart-outline';
  } else if (route.name === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
        tabBarIcon: ({focused, size, color}) =>
          renderTabBarIcon({focused, size, color, route}),
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
