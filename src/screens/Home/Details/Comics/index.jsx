import {Text} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getComicByCharacterId} from '../../../../api/comics';
import {CardList} from '../../../../components';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('screen');
function ComicsList(props) {
  const {params} = props.route;

  const [comics, setComics] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      loadComics().then(() => setLoading(false));
    })();
  }, []);

  const loadComics = async () => {
    try {
      const response = await getComicByCharacterId(params.id, params.total);

      const comicsArray = [];
      for await (const comic of response.data.results) {
        comicsArray.push({
          id: comic.id,
          title: comic.title,
          description: comic.description,
          price: comic.prices,
          image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
          characters: comic.characters,
          url: comic.urls[0].url,
        });
      }

      setComics([...comics, ...comicsArray]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  if (comics === null) return null;

  return (
    <View>
      {loading && (
        <View>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{
              marginTop: height / 2 - 50,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
            }}>
            Loading comics ...
          </Text>
        </View>
      )}

      <FlatList
        data={comics}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CardList id={params.id} type={'comics'} data={item} />
        )}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}
      />
    </View>
  );
}

export {ComicsList};
