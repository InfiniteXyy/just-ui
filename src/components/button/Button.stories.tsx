import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

export const Default = () => {
  return (
    <Button
      variant={select('variant', ['default', 'primary', 'warning'], 'primary')}
      content={text('content', 'click')}
      onClick={action('button-clicked')}
    />
  );
};

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};
