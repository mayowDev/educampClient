// @ts-nocheck
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import LoadingPage from './index';
storiesOf('Loading Page', module)
    .add('default', () => (
        <LoadingPage />
    ));
