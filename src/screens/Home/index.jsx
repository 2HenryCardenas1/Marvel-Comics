import {SearchBar} from '@rneui/themed';
import React, {useState} from 'react';
import {View} from 'react-native';
import Card from '../../components/Card';
import LogoImage from '../../components/Logo';
import styles from './styles';
const HomeScreen = () => {
  const [search, setSearch] = useState('');

  //useEffect to send info to the Card components

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
      <LogoImage />

      {/*
      FlatList
      */}
      <Card />
    </View>
  );
};

export default HomeScreen;
