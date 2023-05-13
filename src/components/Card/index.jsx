import {Icon} from '@rneui/themed';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
const Card = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '60%'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Ajak
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
          }}>
          December 31, <Text>1969</Text>
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
                2
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
                20
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
                1
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
          source={{
            uri: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/10/Quien-es-Ajak-el-personajes-de-Salma-Hayek-en-Eternals-compressed-1.jpg?resize=1280%2C1435&quality=80&ssl=1',
          }}
          style={{
            height: '100%',
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Card;
