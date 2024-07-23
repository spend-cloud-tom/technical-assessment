import { useInfiniteQuery } from '@tanstack/vue-query'

// There are currently 3 rick and morty resources available:
// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

export default function useRickAndMortyList() {
  return useInfiniteQuery({
    queryKey: ['rickAndMortyCharacters'],
    queryFn: ({ pageParam = 1 }) => {
      const url = addQueryParams('/character', { page: pageParam })
      return $rickAndMorty<CharacterResponse>(url)
    },
    getNextPageParam: (lastPage) => {
      return lastPage.info.next ? lastPage.info.pages + 1 : undefined
    },
    initialPageParam: 1,
  })
}
