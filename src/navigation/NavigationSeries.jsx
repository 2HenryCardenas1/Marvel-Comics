import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Details} from '../components/Details/Details';
import {SeriesList} from '../screens/Home/Details/Series';

function NavigationSeries() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{presentation: 'modal'}}>
      <Stack.Screen
        name="SeriesList"
        component={SeriesList}
        options={{
          title: 'Series',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name="SeriesDetails"
        component={Details}
        options={{headerTransparent: true, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
}

export {NavigationSeries};
