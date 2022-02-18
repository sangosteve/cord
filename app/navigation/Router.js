import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './BottomTabNavigators/MainNavigation';
import {navigationRef} from './RootNavigation';
export default function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigation />
    </NavigationContainer>
  );
}
