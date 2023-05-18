import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {CardComic} from '../../../../components';

function ComicsList(props) {
  const {params} = props.route;

  return (
    <ScrollView>
      <CardComic id={1} />
    </ScrollView>
  );
}

export {ComicsList};
