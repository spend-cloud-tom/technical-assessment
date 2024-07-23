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
      return $rickAndMorty<RickAndMortyCharacterResponse>(url)
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.info.next ? getNumericQueryParam(lastPage.info.next, 'page') : null
      return nextPage ?? undefined
    },
    initialPageParam: 1,
  })
}
