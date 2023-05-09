import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from 'react'
import { getCharacters, getCharacterById } from '../../api/characters'
import CharactersList from '../../components/Characters/CharactersList';
import {StyleSheet,Image} from 'react-native'

export default function CharacterScreen() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      await loadCharacters()
    })()
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getCharacters();

      const characterArray = []

      for await (const character of response.data.results) {
        const characterData = await getCharacterById(character.id);
        //console.log("[!]", characterData.data.results[0].name);
        //Add the character to the array
        characterArray.push(
          {
            id: characterData.data.results[0].id,
            name: characterData.data.results[0].name,
            image: characterData.data.results[0].thumbnail.path + "." + characterData.data.results[0].thumbnail.extension,
            comicsAvailable: characterData.data.results[0].comics.available,
            seriesAvailable: characterData.data.results[0].series.available,
          }
        );



      }
      



      setCharacters([...characters, ...characterArray]);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <SafeAreaView style={styles.container}>
        <CharactersList characters={characters} loadCharacters={loadCharacters}/>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

})