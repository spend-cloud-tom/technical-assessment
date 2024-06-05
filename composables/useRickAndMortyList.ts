import { useInfiniteQuery } from '@tanstack/vue-query'
import axios from 'axios'

interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface RickAndMortyCharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: { name: string, url: string }
  location: { name: string, url: string }
  image: string
  episode: string[]
  url: string
  created: string
}

interface RickAndMortyResponse {
  info: Info
  results: RickAndMortyCharacter[]
}

export default function useRickAndMortyList() {
  return useInfiniteQuery<RickAndMortyResponse, Error>({
    queryKey: ['rick-and-morty-list'],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageParam}`)
        return res.data
      }
      catch (error) {
        throw new Error('Error fetching character list')
      }
    },
    getNextPageParam: (lastPage: RickAndMortyResponse) => {
      const nextPageUrl = lastPage.info.next
      return nextPageUrl ? new URL(nextPageUrl).searchParams.get('page') : undefined
    },
    initialPageParam: 1,
  })
}
