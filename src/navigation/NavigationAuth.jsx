import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/Register';

const Stack = createStackNavigator();
const NavigationAuth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default NavigationAuth;
