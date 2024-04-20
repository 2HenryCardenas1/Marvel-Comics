import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/Register';
import {ConfirmCode} from '../screens/Auth/Register/components/ConfirmCode';

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
      <Stack.Screen
        name="ConfirmCode"
        component={ConfirmCode}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ED1D24',
          },
          headerTitleStyle: {
            color: '#FFFFFF',
          },
          headerTintColor: '#FFFFFF',
          title: 'Confirm Code',
        }}
      />
    </Stack.Navigator>
    
  );
};

export default NavigationAuth;
