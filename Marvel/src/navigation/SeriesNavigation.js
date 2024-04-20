import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SeriesScreen from '../screens/SeriesScreens/SeriesScreens'

const Stack = createStackNavigator()
export default function SeriesNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SeriesNav" component={SeriesScreen} options={{title:'',headerTransparent:true}}/>
    </Stack.Navigator>
  )
}