import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Details} from '../components/Details/Details';
import {EventsList} from '../screens/Home/Details/Events';

function NavigationEvents() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{presentation: 'modal'}}>
      <Stack.Screen
        name="EventsList"
        component={EventsList}
        options={{
          title: 'Events',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name="EventDetail"
        component={Details}
        options={{headerTransparent: true, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
}

export {NavigationEvents};
