/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Navigation />
    </>
  );
}

export default App;
