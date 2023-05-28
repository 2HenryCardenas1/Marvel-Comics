import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {getSeriesByCharacterId} from '../../../../api/series';
import {CardSeries} from '../../../../components';

const {width} = Dimensions.get('window');
function SeriesList(props) {
  const {params} = props.route;
  const [series, setSeries] = useState([]);

  useEffect(() => {
    (async () => {
      loadSeries();
    })();
  }, []);

  const loadSeries = async () => {
    try {
      const response = await getSeriesByCharacterId(params.id, params.total);

      const seriesArray = [];
      for await (const serie of response.data.results) {
        seriesArray.push({
          id: serie.id,
          title: serie.title,
          description: serie.description,
          image: `${serie.thumbnail.path}.${serie.thumbnail.extension}`,
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
      <FlatList
        data={series}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CardSeries id={params.id} data={item} />}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}
      />
    </View>
  );
}

export {SeriesList};
