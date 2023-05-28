import {BackgroundImage, Text} from '@rneui/base';
import {Button, Icon} from '@rneui/themed';
import {DateTime} from 'luxon';
import React, {useEffect} from 'react';
import {Linking, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
function Details(props) {
  const {
    navigation,
    route: {params},
  } = props;

  const character = params.data;
  const characters = character.characters.items;

  const messageButton = () => {
    let message = 'See more of the serie';
    if (params.type === 'events') {
      message = '¡ See more of the event !';
    } else if (params.type === 'comics') {
      const price = character.price[0].price;
      message = `Buy by $${price}`;
    }

    return message;
  };

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
      <BackgroundImage
        source={{
          uri: character.image,
        }}
        style={styles.image}
      />

      <View style={styles.containerDetails}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{character.title}</Text>
        </View>

        <View>
          <Text style={{fontSize: 16, lineHeight: 30, textAlign: 'left'}}>
            {character.description === null ? null : character.description}.
          </Text>
          {params.type === 'events' ? (
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}>
                Date init:
                <Text style={{fontSize: 16, lineHeight: 30}}>
                  {' ' +
                    DateTime.fromISO(character.dateStart.slice(0, 10)).toFormat(
                      'MMMM dd, yyyy',
                    )}
                </Text>
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}>
                Date finished :
                <Text style={{fontSize: 16, lineHeight: 30}}>
                  {' ' +
                    DateTime.fromISO(character.dateEnd.slice(0, 10)).toFormat(
                      'MMMM dd, yyyy',
                    )}
                </Text>
              </Text>
            </View>
          ) : null}

          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}>
            Characters :
            <Text style={{fontSize: 16, lineHeight: 30}}>
              {characters.map((character, index) => {
                if (index === characters.length - 1) {
                  return character.name + '.';
                }
                return character.name + ', ';
              })}
            </Text>
          </Text>
        </View>

        <Button
          title={messageButton()}
          containerStyle={{
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: '#ED1D24',
            borderRadius: 10,
            paddingVertical: 5,
          }}
          buttonStyle={{backgroundColor: '#ED1D24'}}
          titleStyle={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
          onPress={() => {
            Linking.openURL(character.url);
          }}
        />
      </View>
    </ScrollView>
  );
}

export {Details};
