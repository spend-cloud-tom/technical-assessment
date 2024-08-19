import type { OverviewItem } from '~/types'

/**
 * Mutates API data to fit the Overview Component UI
 * TODO: Need to strictly type data
 * @param data
 */
export function mutateRickAndMortyApiData(data: any): OverviewItem[] {
  return data.pages.map((page: any) => page.results.map((result: any) => ({
    id: result.id,
    name: result.name,
    link: `/rick-and-morty/${result.id}`,
    metaList: [{
      name: 'Species',
      value: result.species,
    }, {
      name: 'Status',
      value: result.status,
    }],
  })))
}
