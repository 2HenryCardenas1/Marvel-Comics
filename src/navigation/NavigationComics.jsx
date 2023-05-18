import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {ComicsList} from '../screens/Home/Details/Comics';
import {ComicDetails} from '../screens/Home/Details/Comics/ComicDetails/ComicDetails';

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
        name="ComicDetails"
        component={ComicDetails}
        options={{headerTransparent: true, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
}

export {NavigationComics};
