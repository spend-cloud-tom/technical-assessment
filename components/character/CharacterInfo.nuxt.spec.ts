// @vitest-environment nuxt
import { createPinia, setActivePinia } from 'pinia'
import { render, screen } from '@testing-library/vue'
import { beforeEach, describe, expect, it } from 'vitest'
import CharacterInfo from './character-list-item.vue'

describe('characterInfo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders character name and image', async () => {
    const props = {
      name: 'Test Character',
      imageSrc: 'test-image.jpg',
      stats: { Health: 100, Mana: 50 },
    }

    render(CharacterInfo, {
      props,
      global: {
        plugins: [createPinia()],
      },
    })

    expect(screen.getByText(props.name)).toBeInTheDocument()

    const imgElement = screen.getByRole('img') as HTMLImageElement
    expect(imgElement).toHaveAttribute('src')
    expect(imgElement.src).toContain(props.imageSrc)

    expect(screen.getByText('Health:')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Mana:')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
  })
})
