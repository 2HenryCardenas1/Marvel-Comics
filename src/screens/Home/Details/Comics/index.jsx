import React from 'react';
import {CardComic} from '../../../../components';
import { ScrollView } from 'react-native-gesture-handler';
function ComicsList() {
  return (
    <ScrollView>
      <CardComic />
    </ScrollView>
  );
}

export {ComicsList};
