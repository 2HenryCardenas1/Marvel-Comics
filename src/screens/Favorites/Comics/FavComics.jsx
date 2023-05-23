import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {CardList} from '../../../components';

function FavComics() {
  return (
    <ScrollView>
      <CardList id={1} type="comics" />
    </ScrollView>
  );
}

export {FavComics};
