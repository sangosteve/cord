import React, {useState, useEffect, useContext} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './BottomTabNavigators/MainNavigation';
import AuthStack from './StackNavigators/AuthStack';
import {navigationRef} from './RootNavigation';

import AliasScreen from '../screens/AliasScreen';
import {createStackNavigator} from '@react-navigation/stack';

import auth from '@react-native-firebase/auth';
import {AuthContext} from '../contexts/AuthProvider';

const Stack = createStackNavigator();

export default function Router() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [inititializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (inititializing) setInitializing(false);
    setLoading(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <NavigationContainer ref={navigationRef}>
      {user ? (
        <Stack.Navigator>
          {!user?.displayName && (
            <Stack.Screen
              name="DisplayName"
              component={AliasScreen}
              options={{headerShown: false}}
            />
          )}
          <Stack.Screen
            name="MainScreen"
            component={MainNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
