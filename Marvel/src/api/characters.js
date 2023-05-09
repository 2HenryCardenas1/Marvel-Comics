import { API_CHARACTER_URL } from '../utils/constants'

//Get all characters

export async function getCharacters() {
    try {
        const url = `${API_CHARACTER_URL}?ts=1&apikey=861b153e7d321005759748f674862dc8&hash=c18a5294a675a7ad2cf35d379a56fcac`;
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw error

    }
}

//Get one character by id

export async function getCharacterById(id) {
    try {
        const url = `${API_CHARACTER_URL}/${id}?ts=1&apikey=861b153e7d321005759748f674862dc8&hash=c18a5294a675a7ad2cf35d379a56fcac`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}