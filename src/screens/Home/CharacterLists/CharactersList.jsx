import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../../../components/Card';
import LogoImage from '../../../components/Logo';

const CharactersList = props => {
  const {characters, offset, loadCharacters, loading} = props;

  const loadMore = () => {
    loadCharacters(offset);
  };

  return (
    <FlatList
      data={characters}
      key={item => item.id}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={() => (
        <>
          <LogoImage />
          {loading && (
            <View>
              <ActivityIndicator size="large" color="#fefefe" />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: '#fefefe',
                }}>
                Loading characters ...
              </Text>
            </View>
          )}
        </>
      )}
      renderItem={({item}) => <Card character={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        offset && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#aeaeae"
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default CharactersList;
