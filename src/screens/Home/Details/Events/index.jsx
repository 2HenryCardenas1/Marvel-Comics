import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {getEventsByCharacterId} from '../../../../api/events';
import {CardList} from '../../../../components';
const {width} = Dimensions.get('window');
function EventsList(props) {
  const {params} = props.route;

  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      loadEvents();
    })();
  }, []);
  const loadEvents = async () => {
    try {
      const response = await getEventsByCharacterId(params.id, params.total);

      const eventsArray = [];
      for await (const event of response.data.results) {
        eventsArray.push({
          id: event.id,
          title: event.title,
          description: event.description,
          image: `${event.thumbnail.path}.${event.thumbnail.extension}`,
          characters: event.characters,
          url: event.urls[0].url,
          dateStart: event.start,
          dateEnd: event.end,
        });
      }

      setEvents([...events, ...eventsArray]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <View>
      <FlatList
        data={events}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CardList id={params.id} type={'events'} data={item} />
        )}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}
      />
    </View>
  );
}

export {EventsList};
