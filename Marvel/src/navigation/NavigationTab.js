import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Feather, Ionicons } from '@expo/vector-icons';

import ComicsNavigation from './ComicsNavigation'
import CharactersNavigation from './CharactersNavigation'
import SeriesNavigation from './SeriesNavigation'


//Mi variable que manejara el tab 
const Tab = createBottomTabNavigator();

export default function NavigationTab() {


    return (
        <Tab.Navigator
            initialRouteName='Characters'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let etiqueta;
                    if (route.name === "Comics") {
                        iconName = focused ? "book-open" : "book";
                        etiqueta = <FontAwesome5 name={iconName} size={size} color={color} /> || <Feather name={iconName} size={size} color={color} />;
                    }
                    else if (route.name === "Series") {
                        iconName = focused ? "ios-tv-outline" : "ios-tv";
                        etiqueta = <Ionicons name={iconName} size={30} color={color} /> || <Ionicons name={iconName} size={30} color={color} />
                    }



                    // retornamos la etiqueta
                    return etiqueta;
                },

                tabBarActiveTintColor: "#E63838"


            })}>
            <Tab.Screen name="Comics" component={ComicsNavigation} />
            <Tab.Screen
                name="Characters"
                component={CharactersNavigation}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => renderLogo(),
                }}

            />
            <Tab.Screen name="Series" component={SeriesNavigation} />
        </ Tab.Navigator>
    )

}


function renderLogo() {
    return (
        <Image
            source={require("../assets/marvel.png")}
            style={{ width: 74, height: 74, top: -15 }} />
    )
}