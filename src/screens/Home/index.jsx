import {SearchBar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {getTenCharacters} from '../../api/characters';
import CharactersList from './CharacterLists/CharactersList';

import {useNavigation} from '@react-navigation/native';
import {Dimensions, View} from 'react-native';
import styles from './styles';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('screen');

const HomeScreen = () => {
  const navigate = useNavigation();
  const [search, setSearch] = useState('');

  const [characters, setCharacters] = useState([]);

  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(true);

  //useEffect to send info to the Card components

  useEffect(() => {
    (async () => {
      await loadCharacters().then(() => setLoading(false));
    })();
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getTenCharacters(offset);
      setOffset(offset + 10);
      const charactersArray = [];
      for await (const character of response.data.results) {
        charactersArray.push({
          id: character.id,
          name: character.name,
          description: character.description,
          image: character.thumbnail.path + '.' + character.thumbnail.extension,
          totalComics: character.comics.available,
          totalSeries: character.series.available,
          totalEvents: character.events.available,
          dateModified: character.modified,
        });
      }

      setCharacters([...characters, ...charactersArray]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const goToResults = search => {
    navigate.navigate('Results', {name: search});
  };

  if (characters === null) return null;

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Marvel Heroes"
        onChangeText={setSearch}
        value={search}
        platform="ios"
        containerStyle={{
          backgroundColor: '#ED1D24',
          marginHorizontal: 25,
          marginTop: 10,
        }}
        inputContainerStyle={{
          backgroundColor: 'white',
          borderRadius: 20,
        }}
        labelStyle={{color: 'red', backgroundColor: 'white'}}
        inputStyle={{
          color: 'black',
          backgroundColor: 'white',
          borderRadius: 20,
        }}
        cancelButtonProps={{color: 'white'}}
        onSubmitEditing={() => goToResults(search)}
      />

      <CharactersList
        characters={characters}
        offset={offset}
        loadCharacters={loadCharacters}
        loading={loading}
      />
    </View>
  );
};

export default HomeScreen;
