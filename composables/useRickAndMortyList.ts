import { useInfiniteQuery } from '@tanstack/vue-query'
import type { RickAndMortyCharacterResponse } from '~/types/rick-and-morty'

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
