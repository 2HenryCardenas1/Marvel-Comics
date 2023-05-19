import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {CardList} from '../../../../components';
function EventsList() {
  return (
    <ScrollView>
      <CardList type={'events'}/>
    </ScrollView>
  );
}

export {EventsList};
