import { useQuery } from '@tanstack/vue-query'
import { getRickAndMortyCharacter } from '@/services'
import type { RickAndMortyCharacter } from '@/types/rick-and-morty'

export default function useRickAndMortyCharacter(characterId: number) {
  return useQuery<RickAndMortyCharacter, Error>({
    queryKey: ['rick-and-morty-character', characterId],
    queryFn: () => getRickAndMortyCharacter(characterId),
  })
}
