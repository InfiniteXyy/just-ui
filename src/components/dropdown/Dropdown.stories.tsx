import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Dropdown from './Dropdown';
import Icon from '../icon/Icon';

export const Default = () => {
  return (
    <Dropdown
      overlay={
        <Dropdown.Menu>
          <Dropdown.MenuItem>item 1</Dropdown.MenuItem>
          <Dropdown.MenuItem>item 1</Dropdown.MenuItem>
          <Dropdown.MenuItem>item 1</Dropdown.MenuItem>
        </Dropdown.Menu>
      }
    >
      {(isHovered) => (
        <div>
          Arrival Time
          <Icon type={isHovered ? 'DropDown' : 'DropUp'} />
        </div>
      )}
    </Dropdown>
  );
};

export default {
  component: Dropdown,
  title: 'Dropdown',
  decorators: [withKnobs],
};
