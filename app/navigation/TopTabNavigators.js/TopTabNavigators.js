import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MessageScreen from '../../screens/MessageScreen';
import GroupScreen from '../../screens/GroupScreen';
import CallsScreen from '../../screens/CallsScreen';
const Tab = createMaterialTopTabNavigator();
export const TopTabMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 20, color: '#fff', fontWeight: '600'},
        tabBarItemStyle: {width: 160, color: '#fff'},
        tabBarStyle: {backgroundColor: '#2CB9B0', borderBottomColor: '#fff'},
        tabBarActiveTintColor: '#fff',
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: 20,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen name="Group" component={GroupScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
};
