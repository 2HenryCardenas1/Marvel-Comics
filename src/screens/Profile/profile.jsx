import {Button} from '@rneui/themed';
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const {logout, attributes} = useAuth();
  console.log('Attributes: ', attributes);
  if (attributes === undefined || attributes === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      <Text>profile, {attributes.email}</Text>
      <Button title={'Logout'} onPress={() => logout()} />
    </View>
  );
};

export default Profile;
