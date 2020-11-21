import { Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CheckInScreen from '../screens/CheckInScreen';
import { BottomTabParamList, TabHomeParamList, TabThreeParamList, TabTwoParamList } from '../types';
import { Icon } from '@expo/vector-icons/build/createIconSet';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} comp={Ionicons} />,
        }}
      />
      <BottomTab.Screen
        name="CheckIn"
        component={CheckInNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="target" color={color} comp={Feather} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} comp={Ionicons} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string, comp: Icon<string, string> }) {
  return <props.comp size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabHomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home Screen Title' }}
      />
    </HomeStack.Navigator>
  );
}

const CheckInStack = createStackNavigator<TabTwoParamList>();

function CheckInNavigator() {
  return (
    <CheckInStack.Navigator>
      <CheckInStack.Screen
        name="CheckInScreen"
        component={CheckInScreen}
        options={{ headerTitle: 'Check In Screen Title' }}
      />
    </CheckInStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<TabThreeParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile Screen Title' }}
      />
    </ProfileStack.Navigator>
  );
}
