import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import profile from '../screens/Profile/profile';
const Stack = createStackNavigator();
const NavigationProfile = () => {
  return (
    <Stack.Navigator initialRouteName="profileScreen">
      <Stack.Screen name="profileScreen" component={profile} />
    </Stack.Navigator>
  );
};

export default NavigationProfile;
