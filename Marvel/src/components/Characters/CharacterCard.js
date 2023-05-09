import { View, Text, TouchableWithoutFeedback,StyleSheet,Image} from 'react-native'
import React from 'react'
import {capitalize} from "lodash"

export default function CharacterCard(props) {

    
    const { character } = props;

    return (
        <TouchableWithoutFeedback onPress={()=> console.log("hizo click en el personaje :",character.name)} >
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>

                        <Text style={styles.name}>{capitalize(character.name)}</Text>
                        <Text >Comics : {character.comicsAvailable}</Text>
                        <Text >Series : {character.seriesAvailable}</Text>
                        <Image source={{ uri: character.image}} style={styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 160

    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        backgroundColor: 'grey',
        flex:1,
        borderRadius:15,
        padding:10
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 80,
        height: 80,
        borderRadius: 15,
    },
    name: {
        
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 10,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: "#fff",
        fontSize: 11
    },
    bgStyle:{
        flex:1,
        borderRadius:15,
        padding:10
    }
})