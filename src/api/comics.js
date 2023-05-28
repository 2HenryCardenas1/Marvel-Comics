import {KEY_MD5, PUBLIC_API_KEY} from '../key/api_key';
import {API_CHARACTER_URL} from '../utils/constants';

export async function getComicByCharacterId(characterId, limit) {
  let url = `${API_CHARACTER_URL}/${characterId}/comics?ts=10&limit=${limit}&apikey=${PUBLIC_API_KEY}&hash=${KEY_MD5}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
}
