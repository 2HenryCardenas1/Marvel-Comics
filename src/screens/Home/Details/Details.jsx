import {useNavigation} from '@react-navigation/native';
import {BackgroundImage, Text} from '@rneui/base';
import {Icon, Image} from '@rneui/themed';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const Details = props => {
  const infoCharacter = {
    name: 'Ajak',
    image:
      'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/10/Quien-es-Ajak-el-personajes-de-Salma-Hayek-en-Eternals-compressed-1.jpg?resize=1280%2C1435&quality=80&ssl=1',
    date: 'December 31, 1969',
  };

  const {
    navigation,
    route: {params},
  } = props;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="black"
          type="material-community"
          size={25}
          style={{marginLeft: 20}}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  return (
    <ScrollView>
      <View>
        <BackgroundImage
          source={{uri: infoCharacter.image}}
          style={styles.image}
        />
      </View>

      <View
        style={{
          margin: 20,
        }}>
        <Text style={styles.title}>{infoCharacter.name}</Text>
        <Text style={styles.date}>{infoCharacter.date}</Text>
        <View
          style={{
            marginTop: 10,
          }}>
          <Cards name={'comics'} />
          <Cards name={'series'} />
          <Cards name={'events'} />
        </View>
      </View>
    </ScrollView>
  );
};

function Cards(name) {
  let image;
  let margin;
  let title;
  const navigation = useNavigation();

  const goTo = name => {
    switch (name) {
      case 'comics':
        navigation.navigate('ComicsList',{id : 1011334});
        break;
    }
  };

  if (name.name === 'comics') {
    title = 'Comics';
    image = require('../../../assets/imagesFavorites/comic.png');
  } else if (name.name === 'series') {
    title = 'Series';
    image = require('../../../assets/imagesFavorites/popcorns.png');
  } else {
    title = 'Events';
    image = require('../../../assets/imagesFavorites/events.png');
    margin = 15;
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: name.name === 'series' ? 10 : 0,
        marginBottom: margin,
      }}>
      <Image
        source={image}
        style={{
          width: 80,
          height: 50,
        }}
      />

      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          left: -25,
        }}>
        {title}
      </Text>

      <Icon
        name="arrow-right-circle-outline"
        color="black"
        type="material-community"
        size={25}
        onPress={() => goTo(name.name)}
      />
    </View>
  );
}

export default Details;
