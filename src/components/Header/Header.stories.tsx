import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Header from './index'
import { MemoryRouter } from 'react-router-dom'

storiesOf('Header', module)
  .add('default', () => (
    <MemoryRouter>
      <Header isHome={false} routeName="/galleries" isLoggedIn={false} />
    </MemoryRouter>
  ))
    .add('bright', () => (
    <MemoryRouter>
      <Header isHome routeName="/" isLoggedIn={true} />
    </MemoryRouter>
  ))
;
