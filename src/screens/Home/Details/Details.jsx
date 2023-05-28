import {useNavigation} from '@react-navigation/native';
import {BackgroundImage, Text} from '@rneui/base';
import {Icon, Image} from '@rneui/themed';
import {DateTime} from 'luxon';
import React, {useEffect} from 'react';
import {View,Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
const Details = props => {
  const {
    navigation,
    route: {params},
  } = props;

  const character = params.character;

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
        <BackgroundImage source={{uri: character.image}} style={styles.image} />
      </View>

      <View
        style={{
          margin: 20,
        }}>
        <Text style={styles.title}>{character.name}</Text>
        <Text style={styles.date}>
          {DateTime.fromISO(character.dateModified).toFormat('MMMM dd, yyyy')}
        </Text>
        <View
          style={{
            marginTop: 10,
          }}>
          {character.totalComics === 0 ? null : (
            <Cards
              name={'comics'}
              characterId={character.id}
              total={character.totalComics}
            />
          )}
          {character.totalSeries === 0 ? null : (
            <Cards
              name={'series'}
              characterId={character.id}
              total={character.totalSeries}
            />
          )}
          {character.totalEvents === 0 ? null : (
            <Cards
              name={'events'}
              characterId={character.id}
              total={character.totalEvents}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

function Cards({name, characterId, total}) {
  let image;
  let margin;
  let title;
  const navigation = useNavigation();

  const goTo = name => {
    switch (name) {
      case 'comics':
        navigation.navigate('Comics', {
          screen: 'ComicsList',
          params: {
            id: characterId,
            total: total,
          },
        });
        break;
      case 'series':
        navigation.navigate('Series', {
          screen: 'SeriesList',
          params: {
            id: characterId,
            total: total,
          },
        });
        break;
      case 'events':
        navigation.navigate('Events', {
          screen: 'EventsList',
          params: {
            id: characterId,
            total: total,
          },
        });
    }
  };

  if (name === 'comics') {
    title = 'Comics';
    image = require('../../../assets/imagesFavorites/comic.png');
  } else if (name === 'series') {
    title = 'Series';
    image = require('../../../assets/imagesFavorites/popcorns.png');
  } else {
    title = 'Events';
    image = require('../../../assets/imagesFavorites/events.png');
    margin = 15;
  }

  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: name === 'series' ? 10 : 0,
        marginBottom: margin,
      }}
      onPress={() => goTo(name)}>
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
      />
    </Pressable>
  );
}

export default Details;
