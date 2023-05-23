import React from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardList } from '../../../components';

function EventsFav() {
  return (
    <ScrollView>
      <CardList id={1} type="events" />
    </ScrollView>
  
  );
}

export {EventsFav};
