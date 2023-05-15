import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import Details from '../screens/Home/Details/Details';

const Stack = createStackNavigator();

const NavigationHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerTransparent: true, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default NavigationHome;
