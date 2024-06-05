import axios from 'axios'
import type { RickAndMortyResponse } from '~/types/rick-and-morty'

export const API_URL = 'https://rickandmortyapi.com/api/character/'

export interface getRickAndMortyCharacterParams {
  characterId: number
}

export async function getRickAndMortyCharacter(characterId: number): Promise<RickAndMortyCharacter> {
  try {
    const response = await axios.get(`${API_URL}${characterId}`)
    return response.data
  }
  catch (error) {
    throw new Error('Error fetching character data')
  }
}

export async function getRickAndMortyList(pageParam: number): Promise<RickAndMortyResponse> {
  try {
    const response = await axios.get(`${API_URL}?page=${pageParam}`)
    return response.data
  }
  catch (error) {
    throw new Error('Error fetching character list')
  }
}
