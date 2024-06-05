import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

export default function useRickAndMortyCharacter(characterId: number) {
  return useQuery({
    queryKey: ['rick-and-morty-character', characterId],
    queryFn: async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
      return res.data
    },
  })
}
