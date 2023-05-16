import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import {ComicsList} from '../screens/Home/Details/Comics';
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

      <Stack.Group screenOptions={{presentation: 'modal'}}>
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NavigationHome;
