// @ts-nocheck
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MenuItem from './index';
import {MemoryRouter} from 'react-router-dom';

storiesOf('Menu Item', module)
    .add('default', () => (
        <MemoryRouter>
            <MenuItem value='Menu item' to='/' />
        </MemoryRouter>
    ))
;
