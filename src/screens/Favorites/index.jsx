import {useNavigation} from '@react-navigation/native';
import {Image} from '@rneui/base';
import {Button, Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './style';
function FavoriteScreen() {
  const [comics, setComics] = useState([]);
  const auth = true;

  return (
    <ScrollView>
      <CardFav name={'comics'} />
      <CardFav name={'series'} />
      <CardFav name={'events'} />
    </ScrollView>
  );
}

function CardFav({name}) {
  const navigation = useNavigation();
  const image = () => {
    switch (name) {
      case 'comics':
        return require('../../../android/app/src/main/assets/imagesFavorites/comic.png');
      case 'series':
        return require('../../../android/app/src/main/assets/imagesFavorites/popcorns.png');
      case 'events':
        return require('../../../android/app/src/main/assets/imagesFavorites/events.png');
    }
  };

  const goTo = () => {
    switch (name) {
      case 'comics':
        navigation.navigate('ComicsFav', {name: 'comics'});
        break;
      case 'series':
        navigation.navigate('SeriesFav', {name: 'series'});
        break;
      case 'events':
        navigation.navigate('EventsFav', {name: 'events'});
        break;
    }
  };
  return (
    <View
      style={[styles.container, {marginBottom: name === 'events' ? 40 : null}]}>
      <View style={styles.imageContainer}>
        <Image source={image()} style={styles.image} />
      </View>

      <View style={{marginHorizontal: 10}}>
        <Text style={[styles.text, styles.title]}>
          {name === 'series'
            ? 'Series'
            : name === 'events'
            ? 'Events'
            : 'Comics'}
        </Text>
        <Text style={[styles.text, styles.subtitle]}>
          Your favorites{' '}
          {name === 'series'
            ? 'series'
            : name === 'events'
            ? 'events'
            : 'comics'}{' '}
          here
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Button
          containerStyle={styles.bottomContainer}
          buttonStyle={{
            backgroundColor: 'white',
          }}
          onPress={() => goTo()}>
          <Text
            style={{
              color: 'black',
              marginRight: 10,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            View
          </Text>
          <Icon
            name="arrow-right-circle-outline"
            color="black"
            type="material-community"
            size={25}
          />
        </Button>
      </View>
    </View>
  );
}

export {FavoriteScreen};
