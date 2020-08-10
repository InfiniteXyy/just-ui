import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Skeleton from './Skeleton';

export const Default = () => {
  return <Skeleton />;
};

export default {
  component: Skeleton,
  title: 'Skeleton',
  decorators: [withKnobs],
};
