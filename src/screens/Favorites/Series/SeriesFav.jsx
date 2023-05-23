import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {CardSeries} from '../../../components';

function SeriesFav() {
  return (
    <ScrollView>
      <CardSeries id={1} />
    </ScrollView>
  );
}

export {SeriesFav};
