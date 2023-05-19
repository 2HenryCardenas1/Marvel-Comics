import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import Details from '../screens/Home/Details/Details';
import {NavigationComics} from './NavigationComics';
import {NavigationEvents} from './NavigationEvents';
import {NavigationSeries} from './NavigationSeries';

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

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="Comics"
          component={NavigationComics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Series"
          component={NavigationSeries}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Events"
          component={NavigationEvents}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NavigationHome;
