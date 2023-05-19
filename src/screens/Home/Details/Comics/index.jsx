import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {CardList} from '../../../../components';

function ComicsList(props) {
  const {params} = props.route;

  return (
    <ScrollView>
      <CardList id={1} type={'comics'}/>
    </ScrollView>
  );
}

export {ComicsList};
