import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Keyboard, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useAuth from '../hooks/useAuth';
import NoLogged from '../screens/NoLogged/NoLogged';
import NavigationAuth from './NavigationAuth';
import {NavigationFavorites} from './NavigationFavorites';
import NavigationHome from './NavigationHome';
import NavigationProfile from './NavigationProfile';
const Tab = createBottomTabNavigator();
const Navigation = () => {
  const [showTabNavigator, setShowTabNavigator] = useState(true);
  const {auth} = useAuth();

  useEffect(() => {
    //Listener to open the keyboard
    const showSubcription = Keyboard.addListener('keyboardDidShow', e => {
      setShowTabNavigator(false);
    });

    const hideSubcription = Keyboard.addListener('keyboardDidHide', e => {
      setShowTabNavigator(true);
    });
    return () => {
      showSubcription.remove();
      hideSubcription.remove();
    };
  }, []);

  if (auth === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="NavigationHome"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#E63838',
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen
          name="Auth"
          component={auth ? NavigationProfile : NavigationAuth}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <Image
                    source={require('../../android/app/src/main/assets/icons/login2.png')}
                    style={{width: 40, height: 40, top: 6}}
                  />
                );
              }

              return (
                <Image
                  source={require('../../android/app/src/main/assets/icons/login.png')}
                  style={{width: 40, height: 40, top: 6}}
                />
              );
            },

            headerShown: false,
          }}
        />
        <Tab.Screen
          name="NavigationHome"
          component={NavigationHome}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../../android/app/src/main/assets/icons/marvel.png')}
                style={{
                  width: 74,
                  height: 74,
                  top: showTabNavigator ? -15 : 15,
                }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="NavigationFavorite"
          component={auth ? NavigationFavorites : NoLogged}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              let icon = focused ? 'bookmark' : 'bookmark';
              let label;

              if (focused) {
                return (
                  <FontAwesome
                    name={icon}
                    size={35}
                    color="#000"
                    style={{
                      height: 50,
                      width: 40,
                      top: 15,
                    }}
                  />
                );
              }

              return (
                <FontAwesome5
                  name={icon}
                  size={35}
                  color="#000"
                  style={{
                    height: 40,
                    width: 40,
                    top: 10,
                  }}
                />
              );
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
