import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {Details} from '../components/Details/Details';
import {ComicsList} from '../screens/Home/Details/Comics';

const Stack = createStackNavigator();

function NavigationComics() {
  return (
    <Stack.Navigator
      screenOptions={{presentation: 'modal'}}
      initialRouteName="ComicsList">
      <Stack.Screen
        name="ComicsList"
        component={ComicsList}
        options={{
          title: 'Comics',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name="ComicsDetails"
        component={Details}
        options={{headerTransparent: true, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
}

export {NavigationComics};
