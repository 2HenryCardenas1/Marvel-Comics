import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {DateTime} from 'luxon';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

import {nFormatter} from '../../utils/numberFormatter';
const Card = props => {
  const navigation = useNavigation();
  const {character} = props;

  goToDetails = () => {
    navigation.navigate('Details', {character});
  };
  return (
    <Pressable style={styles.container} onPress={goToDetails}>
      <View style={{width: '60%'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            width: '80%',
          }}
          numberOfLines={1}>
          {character.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
          }}>
          {DateTime.fromISO(character.dateModified).toFormat('MMMM dd, yyyy')}
        </Text>

        <View
          style={{
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
              Comics
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                alignItems: 'center',
                width: 50,

                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000',
                  marginRight: 5,
                  fontWeight: '500',
                }}>
                {nFormatter(character.totalComics)}
              </Text>
              <Icon name="book" size={15} color="black" type="font-awesome6" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
              Series
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 18,
                alignItems: 'center',
                width: 50,

                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000',
                  marginRight: 5,
                  fontWeight: '500',
                }}>
                {nFormatter(character.totalSeries)}
              </Text>
              <Icon name="tv" size={15} color="black" type="font-awesome6" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
              Events
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 15.5,
                alignItems: 'center',
                width: 50,

                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000',
                  marginRight: 5,
                  fontWeight: '500',
                }}>
                {nFormatter(character.totalEvents)}
              </Text>
              <Icon
                name="calendar"
                size={15}
                color="black"
                type="font-awesome"
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '40%',
          height: 200,
          aspectRatio: 1,
        }}>
        <Image
          source={{uri: character.image}}
          style={{
            height: '100%',
            borderRadius: 20,
          }}
          onProgress={e => console.log(e.nativeEvent.loaded)}
        />
      </View>
    </Pressable>
  );
};

export default Card;
