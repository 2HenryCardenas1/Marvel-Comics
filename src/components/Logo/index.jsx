import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const LogoImage = () => {
  return (
    <View style={styles.containerImage}>
      <Image
        source={require('../../assets/homeImages/Marvel_Logo.png')}
        style={styles.image}
      />
    </View>
  );
};

export default LogoImage;
