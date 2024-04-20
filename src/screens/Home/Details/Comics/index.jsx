import {Text} from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getComicByCharacterId} from '../../../../api/comics';
import {CardList} from '../../../../components';
import {goToTop} from '../../../../components/GoToTop/goToTop';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('screen');
function ComicsList(props) {
  const {params} = props.route;

  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(false);

  const flatListRef = useRef(null);

  useEffect(() => {
    (async () => {
      loadComics().then(() => setLoading(false));
    })();
  }, []);

  const loadComics = async () => {
    try {
      const response = await getComicByCharacterId(params.id, offset);
      setLoadMore(true);
      if (response.data.results.length === 0) setLoadMore(false);

      setOffset(offset + 10);
      const comicsArray = [];
      for await (const comic of response.data.results) {
        comicsArray.push({
          id: comic.id,
          title: comic.title,
          description: comic.description,
          price: comic.prices,
          image: comic.thumbnail.path + '.' + comic.thumbnail.extension,
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
            color="#ED1D24"
            style={{
              marginTop: height / 2 - 100,
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
        ref={flatListRef}
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
        onEndReached={loadComics}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loadMore &&
          params.total >= 10 && (
            <>
              <ActivityIndicator
                size="large"
                style={{
                  marginTop: 20,
                  marginBottom: 60,
                }}
                color="#ED1D24"
              />
            </>
          )
        }
      />

      {comics.length > 10 && goToTop(flatListRef)}
    </View>
  );
}

export {ComicsList};
