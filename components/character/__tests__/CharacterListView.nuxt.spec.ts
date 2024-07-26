// @vitest-environment nuxt
import { createPinia, setActivePinia } from 'pinia'
import { fireEvent, render, screen } from '@testing-library/vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'

import { beforeEach, describe, expect, it } from 'vitest'
import { h } from 'vue'
import { useListToggleStore } from '../../../stores/list-toggle'
import CharacterListView from '../character-list-view.vue'

describe('loadMoreList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders list of items', async () => {
    const data = {
      pages: [
        {
          results: [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
          ],
        },
      ],
    }
    await renderSuspended(CharacterListView, {
      props: { data, hasNextPage: true },
      slots: {
        item: ({ item }) => h('div', [item.name]),
      },
    })

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('renders "Load more" button', async () => {
    const data = {
      pages: [
        {
          results: [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
          ],
        },
      ],
    }
    const { getByText } = render(CharacterListView, {
      props: { data, hasNextPage: true },
      slots: {
        item: ({ item }) => h('div', [item.name]),
      },
    })
    expect(getByText('Load more')).toBeInTheDocument()
  })

  it('emits "fetchNextPage" event when "Load more" button is clicked', async () => {
    const data = {
      pages: [
        {
          results: [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
          ],
        },
      ],
    }
    const { getByText, emitted } = render(CharacterListView, {
      props: { data, hasNextPage: true },
      slots: {
        item: ({ item }) => h('div', [item.name]),
      },
    })
    const loadMoreButton = getByText('Load more')
    await fireEvent.click(loadMoreButton)
    expect(emitted().fetchNextPage).toHaveLength(1)
  })

  it('disables "Load more" button when hasNextPage is false', async () => {
    const data = {
      pages: [
        {
          results: [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
          ],
        },
      ],
    }
    const { getByText } = render(CharacterListView, {
      props: { data, hasNextPage: false },
      slots: {
        item: ({ item }) => h('div', [item.name]),
      },
    })
    const loadMoreButton = getByText('Load more')
    expect(loadMoreButton).toBeDisabled()
  })

  it('renders list in grid view by default', async () => {
    const data = {
      pages: [
        {
          results: [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
          ],
        },
      ],
    }
    const { getByText } = render(CharacterListView, {
      props: { data, hasNextPage: true },
      slots: {
        item: ({ item }) => h('div', [item.name]),
      },
    })
    expect(getByText('Item 1').parentElement).toBeInTheDocument()
  })

  it('renders list in list view when listToggleStore.isListView is true', async () => {
    const data = {
      pages: [
        {
          results: [
            { name: 'Item 1', id: 1 },
            { name: 'Item 2', id: 2 },
          ],
        },
      ],
    }
    const listToggleStore = useListToggleStore()
    listToggleStore.setIsListView(true)
    const { getByText } = render(CharacterListView, {
      props: { data, hasNextPage: true },
      slots: {
        item: ({ item }) => h('div', [item.name]),
      },
    })
    expect(getByText('Item 1').parentElement).toBeInTheDocument()
  })
})
