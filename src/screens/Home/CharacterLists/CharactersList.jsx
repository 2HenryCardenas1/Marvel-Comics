import {Icon} from '@rneui/themed';
import React, {useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../../../components/Card';
import LogoImage from '../../../components/Logo';

const CharactersList = props => {
  const {characters, offset, loadCharacters, loading, screen} = props;

  const flatListRef = useRef(null);

  const loadMore = () => {
    loadCharacters(offset);
  };

  const goToTop = () => {
    if (characters.length > 10) {
      return (
        <View style={{position: 'absolute', bottom: 20, right: 20}}>
          <TouchableOpacity
            onPress={() =>
              flatListRef.current.scrollToOffset({animated: true, offset: 0})
            }>
            <Icon
              type="material-community"
              name="arrow-up-circle"
              size={30}
              color="#ED1D24"
            />
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={characters}
        key={item => item.id}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (
          <>
            {screen === 'Results' ? null : <LogoImage />}
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
        onEndReached={screen === 'Results' ? null : loadMore}
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
      {goToTop()}
    </>
  );
};

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default CharactersList;
