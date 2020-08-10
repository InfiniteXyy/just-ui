import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Popover from './Popover';
import { Button, Box } from '../index';

export const Default = () => {
  return (
    <Box style={{ width: 500, height: 500 }} align="Center" justify="Center" direction="Column">
      {['Top', 'Right', 'Left', 'Bottom'].map((i: any) => (
        <Popover display={i} key={i} component={<div>{i}</div>}>
          <Button style={{ marginTop: 20 }} content={i} />
        </Popover>
      ))}
    </Box>
  );
};

export default {
  component: Popover,
  title: 'Popover',
  decorators: [withKnobs],
};
