import { storiesOf } from '@storybook/react'
import * as React from 'react'
import dummyImg from '../../assets/images/demoImg1.svg'
import SearchResult from './SearchResult';
import { MemoryRouter } from 'react-router-dom'

storiesOf('Search Result', module)
    .add('default', () => (
        <MemoryRouter>
            {/*@ts-ignore*/}
            <SearchResult
             imgSrc={dummyImg}
             title="title"
             subtitle="subtitlesubtitle"
             description="descriptiondescriptiondescriptiondescription"
               />
        </MemoryRouter>
    ))
;
