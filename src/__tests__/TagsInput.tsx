import React from 'react'

import TagsInput from '@/components/TagsInput/TagsInput'

import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('TagsInput Component', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('cria o snapshot do component', () => {
    const container = render(<TagsInput />)
    expect(container.asFragment()).toMatchSnapshot()
  })

  it('deve renderizar as tags enviadas por atributos', () => {
    const container = render(<TagsInput />)
    const input = container.getByRole('textbox', { name: /tag/i })
    userEvent.type(input, 'nao-responda@rarolabs.com.br{enter}')
    const { debug } = render(<TagsInput />)
    debug()
  })

  it('deve renderizar tags quando preencher o input e pressionar enter', () => {
    const emails = ['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br']

    const container = render(<TagsInput />)

    const input = container.getByRole('textbox', { name: /tag/i })

    userEvent.type(input, 'nao-responda@rarolabs.com.br{enter}')

    const { debug } = container

    debug()
  })

  it('deve renderizar tags quando preencher o input e pressionar tab', () => {
    const container = render(<TagsInput />)
    const input = container.getByRole('textbox', { name: /tag/i })

    userEvent.type(input, 'nao-responda@rarolabs.com.br{tab}')

    const { debug } = container

    debug()
  })

  it('deve deletar a útima tag criada ao pressionar o botão de backspace', async () => {
    const container = render(<TagsInput />)
    const input = container.getByRole('textbox', { name: /tag/i })

    userEvent.type(input, 'nao-responda@rarolabs.com.br{backspace}')

    const { debug } = container

    debug()
  })
})
