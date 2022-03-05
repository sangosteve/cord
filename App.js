/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Router from './app/navigation/Router';
import {AuthProvider} from './app/contexts/AuthProvider';
import PhoneSignIn from './PhoneSignIn';
import AuthStack from './app/navigation/StackNavigators/AuthStack';

const App = () => {
  return (
    // <PhoneSignIn />
    // <>
    //   <StatusBar backgroundColor="#2CB9B0" />
    <AuthProvider>
      <Router />
    </AuthProvider>
    // </>
  );
};

export default App;
