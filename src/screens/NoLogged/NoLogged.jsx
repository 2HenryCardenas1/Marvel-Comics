import {Link} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const NoLogged = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ED1D24',
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
        }}>
        Oh ! You are not logged
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          textAlign: 'center',
          color: 'white',
        }}>
        <Link
          to="/Auth/Login"
          style={{
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          Sign in
        </Link>{' '}
        to view your favorites
      </Text>
    </SafeAreaView>
  );
};

export default NoLogged;
