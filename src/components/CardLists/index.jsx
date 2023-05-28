import {useNavigation} from '@react-navigation/native';
import {BackgroundImage, Image, Text} from '@rneui/base';
import {Button, Icon} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {styles} from './style';

import {DateTime} from 'luxon';

function CardList({id, type, data}) {
  //Receive info from the Card component
  console.log(data.dateStart.slice(0, 10));
  console.log(
    DateTime.fromISO(data.dateStart.slice(0, 10)).toFormat('MMMM dd yyyy'),
  );
  const navigation = useNavigation();
  const goTo = () => {
    switch (type) {
      case 'comics':
        navigation.navigate('Comics', {
          screen: 'ComicsDetails',
          params: {
            id: id,
            type: 'comics',
            data: data,
          },
        });
        break;
      case 'events':
        navigation.navigate('Events', {
          screen: 'EventDetail',
          params: {
            id: 1,
            type: 'events',
            data: data,
          },
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <BackgroundImage
          source={{
            uri: `${data.image}`,
          }}
          style={styles.imageBackground}
        />
        <Image
          source={{
            uri: `${data.image}`,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>

        {type === 'events' ? (
          <Text style={styles.date}>
            {DateTime.fromISO(data.dateStart.slice(0, 10)).toFormat(
              'MMMM dd, yyyy',
            )}
          </Text>
        ) : null}
      </View>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Button
          containerStyle={styles.bottomContainer}
          buttonStyle={{
            backgroundColor: '#ED1D24',
          }}
          onPress={() => goTo()}>
          <Text
            style={{
              color: 'white',
              marginRight: 10,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            More
          </Text>
          <Icon
            name="arrow-right-circle-outline"
            color="white"
            type="material-community"
            size={25}
          />
        </Button>
      </View>
    </View>
  );
}

export {CardList};
