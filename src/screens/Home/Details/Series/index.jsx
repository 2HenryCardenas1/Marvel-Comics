import {Text} from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Dimensions, FlatList, View} from 'react-native';
import {getSeriesByCharacterId} from '../../../../api/series';
import {CardSeries} from '../../../../components';
import {goToTop} from '../../../../components/GoToTop/goToTop';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('screen');
function SeriesList(props) {
  const {params} = props.route;
  const [series, setSeries] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(false);

  const flatListRef = useRef(null);
  useEffect(() => {
    (async () => {
      loadSeries().then(() => setLoading(false));
    })();
  }, []);

  const loadSeries = async () => {
    try {
      const response = await getSeriesByCharacterId(params.id, offset);
      setLoadMore(true);
      if (response.data.results.length === 0) setLoadMore(false);
      setOffset(offset + 10);
      const seriesArray = [];
      for await (const serie of response.data.results) {
        seriesArray.push({
          id: serie.id,
          title: serie.title,
          description: serie.description,
          image: serie.thumbnail.path + '.' + serie.thumbnail.extension,
          characters: serie.characters,
          url: serie.urls[0].url,
        });
      }

      setSeries([...series, ...seriesArray]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  if (series === null) return null;

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
            Loading series ...
          </Text>
        </View>
      )}
      <FlatList
        ref={flatListRef}
        data={series}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CardSeries id={params.id} data={item} />}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}
        onEndReached={loadSeries}
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
      {series.length > 10 && goToTop(flatListRef)}
    </View>
  );
}

export {SeriesList};
