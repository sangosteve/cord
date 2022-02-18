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

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#2CB9B0" />
      <Router />
    </>
  );
};

export default App;
