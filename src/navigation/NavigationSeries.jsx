import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {SeriesList} from '../screens/Home/Details/Series';
import {SerieDetail} from '../screens/Home/Details/Series/SerieDetail/SerieDetail';

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
        component={SerieDetail}
        options={{headerTransparent: true, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
}

export {NavigationSeries};
