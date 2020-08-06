import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import Container from './Container';
import { Button } from '..';

export const Default = () => {
  return (
    <Container
      style={{ height: 300, width: 500, border: '1px solid #cccccc', padding: 10 }}
      horizontal={boolean('horizontal', true)}
      center={boolean('center', false)}
      layout={select('layout-type', ['Stack', 'StackEnd', 'Focus', 'Aside'], 'Stack')}
    >
      <Button style={{ width: 60, height: 40 }} content={'1'} />
      <Button style={{ width: 60, height: 40 }} content={'2'} />
      <Button style={{ width: 60, height: 40 }} content={'3'} />
    </Container>
  );
};

export default {
  component: Container,
  title: 'Container',
  decorators: [withKnobs],
};
