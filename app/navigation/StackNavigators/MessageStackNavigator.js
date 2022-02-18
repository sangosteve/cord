import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DMScreen from '../../screens/DMScreen';
import {TopTabMenu} from '../TopTabNavigators.js/TopTabNavigators';
import {Colors} from '../../constants/Colors';
import Ionicon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();
const MessageStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MainTab"
        component={TopTabMenu}
      />
      <Stack.Screen
        name="DM"
        component={DMScreen}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: Colors.light.primaryBg,
            height: 60,
          },
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicon name="chevron-back-outline" size={32} color="#fff" />
              </Pressable>
              <View>
                <Text style={{fontSize: 22, fontWeight: '500', color: '#fff'}}>
                  John Doe
                </Text>
                <Text style={{fontSize: 18, fontWeight: '500', color: '#fff'}}>
                  Active Now
                </Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 150,
                marginRight: 20,
              }}>
              <Ionicon name="call" size={32} color="#fff" />
              <Ionicon name="videocam" size={32} color="#fff" />
              <Ionicon name="information-circle" size={32} color="#fff" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MessageStackNavigator;

const styles = StyleSheet.create({});
