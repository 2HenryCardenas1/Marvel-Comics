import {BackgroundImage, Text} from '@rneui/base';
import {Button, Icon} from '@rneui/themed';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
function Details(props) {
  //Receive info from the Card component
  const infoCharacter = {
    name: 'Incredible Hercules (2008) #120',
    image:
      'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/10/Quien-es-Ajak-el-personajes-de-Salma-Hayek-en-Eternals-compressed-1.jpg?resize=1280%2C1435&quality=80&ssl=1',
    date: 'December 31, 1969',
    details:
      'SACRED INVASION PART 5 Hercules leads the ragged remains of his God Squad into desperate battle with the unimaginably powerful Skrull pantheon -- and if they lose, Earth dies!',

    characters: 'Ajak,Amadeus Cho, Hercules,Skrulls,Snowbird',
    price: 1.99,
  };

  const messageButton = () => {
    let message = 'See more of the serie';
    if (params.type === 'events') {
      message = '¡ See more of the event !';
    } else if (params.type === 'comics') {
      message = `Buy by $${infoCharacter.price}`;
    }

    return message;
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
      <BackgroundImage
        source={{
          uri: infoCharacter.image,
        }}
        style={styles.image}
      />

      <View style={styles.containerDetails}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{infoCharacter.name}</Text>
        </View>

        <View>
          <Text style={{fontSize: 16, lineHeight: 30, textAlign: 'left'}}>
            {infoCharacter.details}
          </Text>
          {params.type === 'events' ? (
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}>
                Date init:
                <Text style={{fontSize: 16, lineHeight: 30}}>
                  {' ' + infoCharacter.characters}
                </Text>
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}>
                Date finished :
                <Text style={{fontSize: 16, lineHeight: 30}}>
                  {' ' + infoCharacter.characters}
                </Text>
              </Text>
            </View>
          ) : null}

          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}>
            Characters :
            <Text style={{fontSize: 16, lineHeight: 30}}>
              {' ' + infoCharacter.characters}
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
        />
      </View>
    </ScrollView>
  );
}

export {Details};
