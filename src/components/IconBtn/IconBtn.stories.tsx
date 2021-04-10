import { storiesOf } from '@storybook/react'
import * as React from 'react'
import IconBtn from './index'

storiesOf('Icon Btn', module)
    .add('Cross', () => (
        <>
            <IconBtn type="cross"/>
        </>
    ))
    .add('Back', () => (
        <>
            <IconBtn type="back" />
        </>
    ))
    .add('Next', () => (
        <>
            <IconBtn type="next" />
        </>
    ))
    .add('Info', () => (
        <>
            <IconBtn type="info" />
        </>
    ))
    .add('User', () => (
        <>
            <IconBtn type="user" />
        </>
    ))
    .add('Chat', () => (
        <>
            <IconBtn type="chat" />
        </>
    ))
    .add('Down', () => (
        <>
            <IconBtn type="down" />
        </>
    ))
    .add('Menu', () => (
        <>
            <IconBtn type="menu" />
        </>
    ))
    .add('Cross bright', () => (
        <>
            <IconBtn type="cross" secondary />
        </>
    ))
;
