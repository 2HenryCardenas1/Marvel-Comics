import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {getCharacterByName} from '../../api/characters';
import CharactersList from '../Home/CharacterLists/CharactersList';

export default function ResultSearch(props) {
  const {route} = props;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await loadCharacters().then(() => setLoading(false));
    })();
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getCharacterByName(route.params.name);
      const charactersArray = [];
      if (response.data.results.length === 0) {
        return;
      }

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

      setResults([...results, ...charactersArray]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <View>
      {loading && (
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="#fefefe" />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#000',
            }}>
            Loading results ...
          </Text>
        </View>
      )}
      {results.length === 0 && !loading && (
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#000', fontSize: 18}}>
            No results found for{' '}
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000',
                fontSize: 22,
                textDecorationLine: 'underline',
              }}>
              {route.params.name}
            </Text>
          </Text>
        </View>
      )}

      <CharactersList characters={results} screen={'Results'} />
    </View>
  );
}
