import {Text} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, FlatList, View} from 'react-native';
import {getEventsByCharacterId} from '../../../../api/events';
import {CardList} from '../../../../components';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('screen');
function EventsList(props) {
  const {params} = props.route;

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  useEffect(() => {
    (async () => {
      loadEvents().then(() => setLoading(false));
    })();
  }, []);
  const loadEvents = async () => {
    try {
      const response = await getEventsByCharacterId(params.id, offset);
      setLoadMore(true);
      if (response.data.results.length === 0) setLoadMore(false);
      setOffset(offset + 10);
      const eventsArray = [];
      for await (const event of response.data.results) {
        eventsArray.push({
          id: event.id,
          title: event.title,
          description: event.description,
          image: event.thumbnail.path + '.' + event.thumbnail.extension,
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
      {loading && (
        <View>
          <ActivityIndicator
            size="large"
            color="#ED1D24"
            style={{
              marginTop: height / 2 - 100,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
            }}>
            Loading events ...
          </Text>
        </View>
      )}
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
        onEndReached={loadEvents}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loadMore && (
            <>
              <ActivityIndicator
                size="large"
                style={{
                  marginTop: 20,
                  marginBottom: 60,
                }}
                color="#ED1D24"
              />
            </>
          )
        }
      />
    </View>
  );
}

export {EventsList};
