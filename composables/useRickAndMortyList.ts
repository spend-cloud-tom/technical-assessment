import { useInfiniteQuery } from '@tanstack/vue-query'
import axios from 'axios'

export default function useRickAndMortyList() {
  return useInfiniteQuery({
    queryKey: ['rick-and-morty-list'],
    queryFn: ({ pageParam = 1 }) => {
      return axios.get(`https://rickandmortyapi.com/api/character?page=${pageParam}`)
        .then(res => res.data)
    },
    getNextPageParam: (lastPage) => {
      return lastPage.info.next ? lastPage.info.next.split('=')[1] : undefined
    },
    initialPageParam: 1,
  })
}
