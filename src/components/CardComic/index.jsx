import {BackgroundImage, Image, Text} from '@rneui/base';
import {Button, Icon} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {styles} from './style';

function CardComic({id}) {
  console.log(id.id);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <BackgroundImage
          source={{
            uri: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806.jpg',
          }}
          style={styles.imageBackground}
        />
        <Image
          source={{
            uri: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806.jpg',
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          The Initiative (2007)
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
          }}>
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
            onPress={() => goTo(name.name)}
          />
        </Button>
      </View>
    </View>
  );
}

export {CardComic};
