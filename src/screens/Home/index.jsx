import {SearchBar} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import Card from '../../components/Card';
import styles from './styles';
const HomeScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Marvel Heroes"
        onChangeText={setSearch}
        value={search}
        platform="ios"
        containerStyle={{
          backgroundColor: '#ED1D24',
          marginHorizontal: 25,
          marginTop: 20,
        }}
        inputContainerStyle={{
          backgroundColor: 'white',
          borderRadius: 20,
        }}
        labelStyle={{color: 'red', backgroundColor: 'white'}}
        inputStyle={{color: 'red', backgroundColor: 'white', borderRadius: 20}}
        cancelButtonProps={{color: 'white'}}
      />
      <View style={styles.containerImage}>
        <Image
          source={require('../../assets/homeImages/Marvel_Logo.png')}
          style={styles.image}
        />
      </View>
      <Card />
    </View>
  );
};

export default HomeScreen;
