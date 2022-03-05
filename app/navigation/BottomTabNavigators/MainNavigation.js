import React, {useEffect, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TopTabMenu} from '../TopTabNavigators.js/TopTabNavigators';
import MessageStackNavigator from '../StackNavigators/MessageStackNavigator';
import {AuthContext} from '../../contexts/AuthProvider';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AliasScreen from '../../screens/AliasScreen';
const Tab = createBottomTabNavigator();

export default MainNavigation = () => {
  const {user, setUser} = useContext(AuthContext);

  useEffect(() => {
    console.log('user: ', user);
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MessageStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicon name="chatbox" size={28} />
            ) : (
              <Ionicon name="chatbox-outline" size={28} />
            ),
          tabBarLabelStyle: {fontSize: 16, fontWeight: '500'},
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: '#2CB9B0',
            height: 100,
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicon name="person" size={28} />
            ) : (
              <Ionicon name="person-outline" size={28} />
            ),
          tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicon name="settings" size={28} />
            ) : (
              <Ionicon name="settings-outline" size={28} />
            ),
          tabBarLabelStyle: {fontSize: 14, fontWeight: '500'},
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};
