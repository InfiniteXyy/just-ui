import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Popover from './Popover';
import { Button } from '..';

export const Default = () => {
  return (
    <Popover component={<div>213</div>}>
      <Button content="Click" />
    </Popover>
  );
};

export default {
  component: Popover,
  title: 'Popover',
  decorators: [withKnobs],
};
