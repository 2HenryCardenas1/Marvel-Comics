import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import ComicsScreen from '../screens/ComicsScreen';

const Stack = createStackNavigator();

export default function ComicsNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="ComicsScreen" component={ComicsScreen} options={{title:'', headerTransparent: true}} />
    </Stack.Navigator>
  )
}