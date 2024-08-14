import { useInfiniteQuery } from '@tanstack/vue-query'
import type { Ref } from '@vue/reactivity'

export default function useRickAndMortyCharacterList(searchQuery?: Ref<string>) {
  return useInfiniteQuery({
    queryKey: ['rick-and-morty-character-list', 'rick-and-morty'],
    queryFn: ({ pageParam = 1 }) => {
      const searchQueryValue = toValue(searchQuery)
      const params = new URLSearchParams(`page=${pageParam}`)

      if (searchQueryValue) {
        params.append('name', searchQueryValue)
      }

      return $rickAndMorty<{
        info: {
          count: number
          pages: number
          next: string | null
          prev: string | null
        }
        results: RickAndMortyCharacter[]
      }>(`character?${params.toString()}`)
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.info.pages === lastPageParam) {
        return undefined
      }

      return lastPageParam + 1
    },
    initialPageParam: 0,
  })
}
