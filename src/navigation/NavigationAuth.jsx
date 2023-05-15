import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/Register';

const Stack = createStackNavigator();
const NavigationAuth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ED1D24',
          },
          headerTitleStyle: {
            color: '#FFFFFF',
          },

          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationAuth;
