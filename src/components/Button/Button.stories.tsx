// @ts-nocheck
import {storiesOf} from '@storybook/react'
import * as React from 'react'
import Button from './index';

storiesOf('Button', module)
    .add('dark', () => (
        <div style={{'padding': '10px', 'background': '#000'}}>
            <Button
                value='Label'
                className='btn__dark'
                onClick={() => console.log('Clicked!')}
            />
        </div>
    ))
    .add('dark with icon', () => (
        <div style={{'padding': '10px', 'background': '#000'}}>
            <Button
                value='Label'
                className='btn__dark'
                iconType="next"
                onClick={() => console.log('Clicked!')}
            />
        </div>
    ))
    .add('dark --secondary', () => (
        <div style={{'padding': '10px', 'background': '#000'}}>
            <Button
                value='Label'
                className='btn__dark'
                type="secondary"
                onClick={() => console.log('Clicked!')}
            />
        </div>
    ))
    .add('bright', () => (
        <div style={{'padding': '10px', 'background': '#fff'}}>
            <Button
                value='Label'
                className='btn__bright'
                onClick={() => console.log('Clicked!')}
            />
        </div>
    ))
    .add('bright --primary', () => (
        <div style={{'padding': '10px', 'background': '#fff'}}>
            <Button
                value='Label'
                className='btn__bright'
                type="secondary"
                onClick={() => console.log('Clicked!')}
            />
        </div>
    ))


