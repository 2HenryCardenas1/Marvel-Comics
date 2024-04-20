import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import CharacterDetail from "../screens/CharactersScreens/CharacterDetails";
import Characters from "../screens/CharactersScreens/Characters";

const Stack = createStackNavigator();

export default function CharactersNavigation() {
  return (
    //This stack navigator will be used to navigate to the characters screen and to the character details screen
    <Stack.Navigator>
      {/*This screen is a list characters    */}
      <Stack.Screen
        name="CharactersList"
        component={Characters}
        options={{title: "", headerTransparent: true}}
      />
      {/*This screen is a character details*/}
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetail}
        options={{title: "", headerTransparent: true}}
      />
    </Stack.Navigator>
  );
}