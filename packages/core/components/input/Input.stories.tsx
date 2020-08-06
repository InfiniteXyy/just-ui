import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Input from './Input';

export const Default = () => {
  return <Input placeholder={text('Placeholder', 'Placeholder...')} />;
};

export default {
  component: Input,
  title: 'Input',
  decorators: [withKnobs],
};
