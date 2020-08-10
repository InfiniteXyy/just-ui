import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Icon from './Icon';

export const Default = () => {
  return <Icon type="Close" />;
};

export default {
  component: Icon,
  title: 'Icon',
  decorators: [withKnobs],
};
