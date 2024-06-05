export interface getRickAndMortyCharacterParams {
  characterId: number
}

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

export interface RickAndMortyResponse {
  info: Info
  results: RickAndMortyCharacter[]
}
