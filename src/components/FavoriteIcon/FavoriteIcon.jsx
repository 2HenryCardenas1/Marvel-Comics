import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  AddFavorite,
  RemoveFavorite,
  isFavorite as isFavoriteApi,
} from '../../api/localStorage';
const FavoriteIcon = ({data, type}) => {
  const [reloadCheck, setReloadCheck] = useState(false);
  const [isFavorite, setIsFavorite] = useState(undefined);

  const onRelaodCheckFavorite = () => {
    setReloadCheck(prev => !prev);
  };

  const addFavorite = async () => {
    try {
      await AddFavorite(data, type);
      onRelaodCheckFavorite();
    } catch (error) {
      throw error;
    }
  };

  const removeFavorite = async () => {
    try {
      await RemoveFavorite(data, type);
      onRelaodCheckFavorite();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await isFavoriteApi(data, type);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [data, type, reloadCheck]);

  return (
    <View>
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        color="red"
        type="material-community"
        size={35}
        style={{
          marginRight: 20,
        }}
        onPress={isFavorite ? removeFavorite : addFavorite}
      />
    </View>
  );
};

export {FavoriteIcon};
