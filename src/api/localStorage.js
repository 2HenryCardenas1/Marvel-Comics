import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FAVORITE_STORAGE_KEY_COMICS,
  FAVORITE_STORAGE_KEY_EVENTS,
  FAVORITE_STORAGE_KEY_SERIES,
} from '../utils/constants';

export async function AddFavorite(item, type) {
  try {
    switch (type) {
      case 'comics':
        let favorites = await GetFavorites('comics');
        favorites.push(item);
        await AsyncStorage.setItem(
          FAVORITE_STORAGE_KEY_COMICS,
          JSON.stringify(favorites),
        );
        break;
      case 'series':
        let favoritesSeries = await GetFavorites('series');
        favoritesSeries.push(item);
        await AsyncStorage.setItem(
          FAVORITE_STORAGE_KEY_SERIES,
          JSON.stringify(favoritesSeries),
        );
        break;
      case 'events':
        let favoritesEvents = await GetFavorites('events');
        favoritesEvents.push(item);
        await AsyncStorage.setItem(
          FAVORITE_STORAGE_KEY_EVENTS,
          JSON.stringify(favoritesEvents),
        );
        break;
      default:
        break;
    }
  } catch (error) {
    throw error;
  }
}

export async function GetFavorites(type) {
  try {
    switch (type) {
      case 'comics':
        let favoritesComics = await AsyncStorage.getItem(
          FAVORITE_STORAGE_KEY_COMICS,
        );
        return JSON.parse(favoritesComics || '[]');
      case 'series':
        let favoritesSeries = await AsyncStorage.getItem(
          FAVORITE_STORAGE_KEY_SERIES,
        );
        return JSON.parse(favoritesSeries || '[]');
      case 'events':
        let favoritesEvents = await AsyncStorage.getItem(
          FAVORITE_STORAGE_KEY_EVENTS,
        );
        return JSON.parse(favoritesEvents || '[]');
      default:
        return JSON.parse('[]');
    }
  } catch (error) {
    throw error;
  }
}

export async function isFavorite(item, type) {
  
  try {
    switch (type) {
      case 'comics':
        let favoritesComics = await GetFavorites('comics');
        return favoritesComics.some(x => x.id === item.id);
      case 'series':
        let favoritesSeries = await GetFavorites('series');
        return favoritesSeries.some(x => x.id === item.id);
      case 'events':
        let favoritesEvents = await GetFavorites('events');
        return favoritesEvents.some(x => x.id === item.id);
      default:
        return false;
    }
  } catch (error) {
    throw error;
  }
}

export async function RemoveFavorite(item, type) {
  try {
    switch (type) {
      case 'comics':
        const favoritesComics = await GetFavorites('comics');
        const newFavoritesComics = favoritesComics.filter(
          x => x.id !== item.id,
        );
        await AsyncStorage.setItem(
          FAVORITE_STORAGE_KEY_COMICS,
          JSON.stringify(newFavoritesComics),
        );
        break;
      case 'series':
        const favoritesSeries = await GetFavorites('series');
        const newFavoritesSeries = favoritesSeries.filter(
          x => x.id !== item.id,
        );
        await AsyncStorage.setItem(
          FAVORITE_STORAGE_KEY_SERIES,
          JSON.stringify(newFavoritesSeries),
        );
        break;
      case 'events':
        const favoritesEvents = await GetFavorites('events');
        const newFavoritesEvents = favoritesEvents.filter(
          x => x.id !== item.id,
        );
        await AsyncStorage.setItem(
          FAVORITE_STORAGE_KEY_EVENTS,
          JSON.stringify(newFavoritesEvents),
        );
        break;
      default:
        break;
    }
  } catch (error) {
    throw error;
  }
}
