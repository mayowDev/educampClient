import {storiesOf} from '@storybook/react';
import React from 'react';
import Card from './Card';
import ExhibitionImg from '../../assets/images/exhibition.svg';

storiesOf('Card', module)
    .add('default', () => (
        <Card imgSrc={ExhibitionImg} title="Pi Gallery"
              description="London Collective is the first collective of its kind, bringing
               together 40 of London’s
              leading contemporary galleries on the new extended reality app Vortic Collect."
              location="London, UK"
              onClick={() => {console.log('Clicked!')}}
        />
    ))
    .add('horizontal', () => (
        <Card imgSrc={ExhibitionImg} title="Pi Gallery"
              description="London Collective is the first collective of its kind, bringing
               together 40 of London’s
              leading contemporary galleries on the new extended reality app Vortic Collect."
              location="London, UK"
              horizontal
        />
    ))
    .add('Horizontal for Artwork', () => (
        <Card imgSrc={ExhibitionImg} title="Pi Gallery"
              description="London Collective is the first collective of its kind, bringing
               together 40 of London’s
              leading contemporary galleries on the new extended reality app Vortic Collect."
              location="London, UK"
              address="Lives and works in London"
              onClick={() => {console.log('Clicked!')}}
              horizontal
        />
    ))
    .add('Horizontal for Events', () => (
        <Card imgSrc={ExhibitionImg} title="Pi Gallery"
              description="Sed nisl purus, praesent sagittis, odio. Purus quis non erat tortor, in in mauris nibh vestibulum. Quam non vulputate sagittis magna viverra. Consequat quis nisl sit laoreet sit id id. Lectus nisi ultrices tincidunt amet, odio nec leo.Sed nisl purus, praesent sagittis, odio. Purus quis non erat tortor, in in mauris nibh vestibulum. Quam non vulputate sagittis magna viverra. Consequat quis nisl sit laoreet sit id id. Lectus nisi ultrices tincidunt amet, odio nec leo."
              horizontal
              event
              moderatedBy="Lorem Ipsum"
              timeLine="December 1st, 2020 | 2 p.m. GMT"
              toggleRegister={() => console.log('Toggle Register Clicked!')}
        />
    ))
    .add('Horizontal for Events with no border', () => (
        <Card imgSrc={ExhibitionImg} title="Pi Gallery"
              description="Sed nisl purus, praesent sagittis, odio."
              horizontal
              event
              noBorder
              moderatedBy="Title of Moderator"
              timeLine="December 1st, 2020 | 2 p.m. GMT"
              toggleRegister={() => console.log('Toggle Register Clicked!')}
              registered={true}
        />
    ))
;
