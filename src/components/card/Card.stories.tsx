import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from './Card';

export const Default = () => {
  return (
    <Card style={{ width: 60 }}>
      <b>title</b>
    </Card>
  );
};

export default {
  component: Card,
  title: 'Card',
  decorators: [withKnobs],
};
