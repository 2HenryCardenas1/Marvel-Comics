import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {getCharacterById, getCharacters} from "../../api/characters";
import CharactersList from "../../components/Characters/CharactersList";

export default function CharacterScreen() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      await loadCharacters();
    })();
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getCharacters();

      const characterArray = [];

      for await (const character of response.data.results) {
        const characterData = await getCharacterById(character.id);

        //Add the character to the array
        characterArray.push({
          id: characterData.data.results[0].id,
          name: characterData.data.results[0].name,
          image:
            characterData.data.results[0].thumbnail.path +
            "." +
            characterData.data.results[0].thumbnail.extension,
          comicsAvailable: characterData.data.results[0].comics.available,
          seriesAvailable: characterData.data.results[0].series.available,
        });
      }

      setCharacters([...characters, ...characterArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <CharactersList characters={characters} loadCharacters={loadCharacters} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
