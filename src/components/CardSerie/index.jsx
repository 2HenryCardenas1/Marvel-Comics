import {useNavigation} from '@react-navigation/native';
import {BackgroundImage, Button, Image, Text} from '@rneui/base';
import {Icon} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

function CardSeries({id, data}) {
  const infoCharacter = {
    name: 'Incredible Hercules  (2008 - 2010)',
    image:
      'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/10/Quien-es-Ajak-el-personajes-de-Salma-Hayek-en-Eternals-compressed-1.jpg?resize=1280%2C1435&quality=80&ssl=1',
    date: 'December 31, 1969',
  };

  const navigation = useNavigation();

  const goTo = () => {
    navigation.navigate('Series', {
      screen: 'SeriesDetails',
      params: {
        id: id,
        type: 'series',
        data: data,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <BackgroundImage
          source={{uri: data.image}}
          style={styles.imageBackground}
        />
        <Image source={{uri: data.image}} style={styles.image} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>
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

export {CardSeries};
