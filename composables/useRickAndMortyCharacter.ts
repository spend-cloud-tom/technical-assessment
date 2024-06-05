import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import type { RickAndMortyCharacter } from './useRickAndMortyList'

export default function useRickAndMortyCharacter(characterId: number) {
  return useQuery<RickAndMortyCharacter, Error>({
    queryKey: ['rick-and-morty-character', characterId],
    queryFn: async () => {
      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        return res.data
      }
      catch (error) {
        throw new Error('Error fetching character data')
      }
    },
  })
}
