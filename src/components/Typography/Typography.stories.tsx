// @ts-nocheck
import {storiesOf} from '@storybook/react'
import * as React from 'react'
import {H1, H2, H3, H4, P1, P2, P3, Detail, SubTitle, Tooltip, Navigation1, Navigation2, Label} from './index';

storiesOf('Typography', module)
    .add('H1', () => (
        <div style={{'padding': '10px'}}>
            <H1 value='h1. Heading 1'/>
        </div>
    ))
    .add('H2', () => (
        <div style={{'padding': '10px'}}>
            <H2 value='h2. Heading 2'/>
        </div>
    ))
    .add('H3', () => (
        <div style={{'padding': '10px'}}>
            <H3 value='h3. Heading 3'/>
        </div>
    ))
    .add('H4', () => (
        <div style={{'padding': '10px'}}>
            <H4 value='h4. Heading 4'/>
        </div>
    ))
    .add('P1', () => (
        <div style={{'padding': '10px', 'width': '336px'}}>
            <P1 value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur'/>
        </div>
    ))
    .add('P2', () => (
        <div style={{'padding': '10px', 'width': '336px'}}>
            <P2 value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur'/>
        </div>
    ))
    .add('P2', () => (
        <div style={{'padding': '10px', 'width': '336px'}}>
            <P2 className="error" value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur'/>
        </div>
    ))
    .add('P3', () => (
        <div style={{'padding': '10px'}}>
            <P3 value='31.0 x 23.1 x 0.0 cm 12.2 x 9.1 x 0.0 in'/>
        </div>
    ))
    .add('Detail', () => (
        <div style={{'padding': '10px'}}>
            <Detail value='Detail Copy for artwork'/>
        </div>
    ))
    .add('SubTitle', () => (
        <div style={{'padding': '10px'}}>
            <SubTitle value='Subtitle'/>
        </div>
    ))
    .add('Tooltip', () => (
        <div style={{'padding': '10px', 'width': '336px'}}>
            <Tooltip
                value='Tooltip. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur'/>
        </div>
    ))
    .add('Navigation1', () => (
        <div style={{'padding': '10px'}}>
            <Navigation1 value='Navigation1. Section'/>
        </div>
    ))
    .add('Navigation2', () => (
        <div style={{'padding': '10px'}}>
            <Navigation2 value='Navigation2. Section'/>
        </div>
    ))
    .add('Button Text | Content Label', () => (
        <div style={{'padding': '10px'}}>
            <Label value='Button Text, Content Label'/>
        </div>
    ));
