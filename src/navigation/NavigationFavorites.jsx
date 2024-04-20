import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {FavoriteScreen} from '../screens/Favorites';
import {FavComics} from '../screens/Favorites/Comics/FavComics';
import {EventsFav} from '../screens/Favorites/Events/EventsFav';
import {SeriesFav} from '../screens/Favorites/Series/SeriesFav';

function NavigationFavorites() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{presentation: 'modal'}}>
      <Stack.Screen
        name="FavHome"
        component={FavoriteScreen}
        options={{
          title: 'Favorites',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}
      />

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="ComicsFav"
          component={FavComics}
          options={{
            title: 'Favorites Comics',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SeriesFav"
          component={SeriesFav}
          options={{
            title: 'Favorites Series',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="EventsFav"
          component={EventsFav}
          options={{
            title: 'Favorites Events',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export {NavigationFavorites};
