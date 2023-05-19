import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {CardSeries} from '../../../../components';

function SeriesList() {
  return (
    <ScrollView style={{padding: 10, marginTop: 15}}>
      <CardSeries />
    </ScrollView>
  );
}

export {SeriesList};
