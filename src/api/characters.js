import {KEY_MD5, PUBLIC_API_KEY} from '../key/api_key';
import {API_CHARACTER_URL} from '../utils/constants';

export async function getTenCharacters(offset) {
  let url = `${API_CHARACTER_URL}?ts=10&limit=10&offset=${offset}&apikey=${PUBLIC_API_KEY}&hash=${KEY_MD5}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
}

export async function getCharacterByName(name) {
  let url = `${API_CHARACTER_URL}?name=${name}&ts=10&apikey=${PUBLIC_API_KEY}&hash=${KEY_MD5}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
