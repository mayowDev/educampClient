import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Footer from './index'
import { MemoryRouter } from 'react-router-dom'

storiesOf('Footer', module)
  .add('default', () => (
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  ));
