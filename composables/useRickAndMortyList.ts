import { useInfiniteQuery } from '@tanstack/vue-query'
import { getRickAndMortyList } from '@/services'
import type { RickAndMortyResponse } from '@/types/rick-and-morty'

export default function useRickAndMortyList() {
  return useInfiniteQuery<RickAndMortyResponse, Error>({
    queryKey: ['rick-and-morty-list'],
    queryFn: ({ pageParam = 1 }) => getRickAndMortyList(pageParam),
    getNextPageParam: (lastPage: RickAndMortyResponse) => {
      const nextPageUrl = lastPage.info.next
      return nextPageUrl ? Number.parseInt(new URL(nextPageUrl).searchParams.get('page') ?? '0') : undefined
    },
    initialPageParam: 1,
  })
}
