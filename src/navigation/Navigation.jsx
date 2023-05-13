import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ComicsScreen from '../screens/Comics';
import HomeScreen from '../screens/Home';
import SeriesScreen from '../screens/Series';
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#E63838',
        })}>
        <Tab.Screen
          name="Login"
          component={ComicsScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <Image
                    source={require('../assets/icons/login2.png')}
                    style={{width: 40, height: 40, top: 6}}
                  />
                );
              }

              return (
                <Image
                  source={require('../assets/icons/login.png')}
                  style={{width: 40, height: 40, top: 6}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/icons/marvel.png')}
                style={{width: 74, height: 74, top: -15}}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Series"
          component={SeriesScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              let icon = focused ? 'bookmark' : 'bookmark';
              let label;

              if (focused) {
                return (
                  <FontAwesome
                    name={icon}
                    size={25}
                    color="#000"
                    style={{top: 6}}
                  />
                );
              }

              return (
                <FontAwesome5
                  name={icon}
                  size={25}
                  color="#000"
                  style={{top: 6}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
