// @ts-nocheck
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Input from './index';
storiesOf('Input', module)
    .add('dark', () => (
    <div style={{'padding': '10px', 'background': '#000'}}>
        <Input
            value=''
            label='Subtitle'
            type='text'
            placeholder='here ya go..'
            className='input__dark'
            onChange={(value) => console.log(value)}
        />
    </div>
  ))
    .add('bright', () => (
    <div style={{'padding': '10px', 'background': '#fff'}}>
        <Input
            value=''
            label='Subtitle'
            type='text'
            placeholder='here ya go..'
            className='input__bright'
            onChange={(value) => console.log(value)}
        />
    </div>
  ))
    .add('bright disabled', () => (
    <div style={{'padding': '10px', 'background': '#fff'}}>
        <Input
            value=''
            label='Subtitle'
            type='text'
            disabled
            placeholder='here ya go..'
            className='input__bright'
            onChange={(value) => console.log(value)}
        />
    </div>
  ))
    .add('error dark', () => (
    <div style={{'padding': '10px', 'background': '#000'}}>
        <Input
            value=''
            label='Subtitle'
            type='text'
            placeholder='here ya go..'
            className='input__dark input__error'
            onChange={(value) => console.log(value)}
        />
    </div>
  ))
    .add('error bright', () => (
    <div style={{'padding': '10px', 'background': '#fff'}}>
        <Input
            value=''
            label='Subtitle'
            type='text'
            placeholder='here ya go..'
            className='input__bright input__error'
            onChange={(value) => console.log(value)}
        />
    </div>
  ))
    .add('disabled bright', () => (
    <div className="cursor-disabled" style={{'padding': '10px', 'background': '#fff'}}>
        <Input
            value=''
            label='Subtitle'
            type='text'
            disabled
            placeholder='here ya go..'
            className='input__bright input__error input--disabled'
            onChange={(value) => console.log(value)}
        />
    </div>
  ))
    .add('disabled dark', () => (
        <div style={{'padding': '10px', 'background': '#000'}}>
            <Input
                value=''
                label='Subtitle'
                type='text'
                disabled
                placeholder='here ya go..'
                className='input__dark input__error'
                onChange={(value) => console.log(value)}
            />
        </div>
    ))
    .add('password bright', () => (
        <div style={{'padding': '10px', 'background': '#fff'}}>
            <Input
                value=''
                label='Subtitle'
                type='password'
                placeholder='here ya go..'
                className='input__bright'
                onChange={(value) => console.log(value)}
            />
        </div>
    ))
    .add('password dark', () => (
        <div style={{'padding': '10px', 'background': '#000'}}>
            <Input
                value=''
                label='Subtitle'
                type='password'
                placeholder='here ya go..'
                className='input__dark'
                onChange={(value) => console.log(value)}
            />
        </div>
    ))
