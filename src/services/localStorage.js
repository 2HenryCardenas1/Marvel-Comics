import AsyncStorage from '@react-native-async-storage/async-storage';

export function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

export async function setFavorites(favorites) {
  await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
}

export function addFavorite(favorite) {
  const favorites = getFavorites();
  favorites.push(favorite);
  setFavorites(favorites);
}

export function removeFavorite(favorite) {
  const favorites = getFavorites();
  const index = favorites.findIndex(f => f.id === favorite.id);
  if (index !== -1) {
    favorites.splice(index, 1);
    setFavorites(favorites);
  }
}
