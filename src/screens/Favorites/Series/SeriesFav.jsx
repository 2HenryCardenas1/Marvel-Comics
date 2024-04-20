import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetFavorites} from '../../../api/localStorage';
import {CardSeries} from '../../../components';
const {width} = Dimensions.get('window');
function SeriesFav() {
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const series = await GetFavorites('series');
        setData(series);
      })();
    }),
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardSeries id={item.id} data={item} type={'comics'} />
        )}
        keyExtractor={item => item.id}
        numColumns={1}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}
      />
    </SafeAreaView>
  );
}

export {SeriesFav};
