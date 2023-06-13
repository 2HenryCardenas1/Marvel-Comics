/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {Amplify} from 'aws-amplify';
import 'react-native-gesture-handler';
import config from './src/aws-exports';
import {AuthProvider} from './src/context/AuthContext';
import Navigation from './src/navigation/Navigation';

Amplify.configure(config);

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
}

export default App;
