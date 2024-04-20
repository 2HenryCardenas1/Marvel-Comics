import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetFavorites} from '../../../api/localStorage';
import {CardList} from '../../../components';
const {width} = Dimensions.get('window');
function EventsFav() {
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const events = await GetFavorites('events');
        setData(events);
      })();
    }),
  );
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <CardList data={item} type={'events'} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}
      />
    </SafeAreaView>
  );
}

export {EventsFav};
