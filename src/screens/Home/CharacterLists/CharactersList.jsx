import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import Card from '../../../components/Card';
import LogoImage from '../../../components/Logo';

const CharactersList = props => {
  const {characters, offset, loadCharacters} = props;

  const loadMore = () => {
    loadCharacters(offset);
  };

  return (
    <FlatList
      data={characters}
      key={item => item.id}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={() => <LogoImage />}
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
