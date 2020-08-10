import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import Box from './Box';
import { Button } from '../index';

export const Default = () => {
  return (
    <Box
      style={{ height: 300, width: 500, border: '1px solid #cccccc', padding: 10 }}
      align={select('alignItems', ['Start', 'Center', 'End'], 'Start')}
      justify={select('justifyContent', ['Start', 'Center', 'End', 'Between'], 'Start')}
      direction={select('direction', ['Column', 'Row'], 'Column')}
    >
      <Button style={{ width: 60, height: 40 }} content={'1'} />
      <Button style={{ width: 60, height: 40 }} content={'2'} />
      <Button style={{ width: 60, height: 40 }} content={'3'} />
    </Box>
  );
};

export default {
  component: Box,
  title: 'Box',
  decorators: [withKnobs],
};
