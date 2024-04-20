import React from "react";
import {ActivityIndicator, FlatList, Platform, StyleSheet} from "react-native";
import CharacterCard from "../Characters/CharacterCard";

export default function CharactersList(props) {
  const {characters, loadCharacters} = props;
  //console.log("[!]", loadCharacters);

  // Function to loading more characters

  const loadMoreCharacters = () => {
    console.log("Entro");
    loadCharacters();
  };

  return (
    <FlatList
      data={characters}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <CharacterCard character={item} />}
      contentContainerStyle={styles.container}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#aeaeae"
        />
      }
      onEndReached={loadMoreCharacters()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 3,
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});