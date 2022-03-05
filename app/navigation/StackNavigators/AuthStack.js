import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import OTPScreen from '../../screens/OTPScreen';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="OTP" component={OTPScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
