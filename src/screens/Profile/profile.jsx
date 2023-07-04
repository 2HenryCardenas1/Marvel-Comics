import {Button, Divider} from '@rneui/themed';
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const {logout, attributes} = useAuth();

  if (attributes === undefined || attributes === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          marginTop: 20,
          marginBottom: 20,
          borderWidth: 0.01,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          elevation: 1,
          shadowRadius: 5,
          padding: 10,
        }}>
        {cardData(
          attributes.name + ' ' + attributes.family_name,
          (title = 'Name'),
          (index = 0),
        )}
        {cardData(attributes.email, (title = 'Email'))}
        {cardData(attributes.preferred_username, (title = 'Username'))}
      </View>
      <Button title={'Logout'} onPress={() => logout()} color={'#ED1D24'} />
    </SafeAreaView>
  );
};

const cardData = (data, title, index) => {
  return (
    <>
      {index === 0 ? null : (
        <Divider
          style={{
            marginVertical: 10,
          }}
        />
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {title} :
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
            }}>
            {data}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Profile;
