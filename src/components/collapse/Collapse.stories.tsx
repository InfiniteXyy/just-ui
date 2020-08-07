import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Collapse from './Collapse';

export const Default = () => {
  const [openState, setOpenState] = useState<{ [key: string]: boolean }>({});
  const toggleOpen = (id: string) => {
    setOpenState({ ...openState, [id]: !openState[id] });
  };
  return (
    <div>
      <Collapse label={<h1>Label</h1>} isOpen={openState['1']} onClickLabel={() => toggleOpen('1')}>
        <span>
          ConContentContentContentContentContentContentContenttContentContentContentContentContentContentContentent
          ConContentContentContentContentContentContentContenttContentContentContentContentContentContentContentent
          ConContentContentContentContentContentContentContenttContentContentContentContentContentContentContentent
          ConContentContentContentContentContentContentContenttContentContentContentContentContentContentContentent
        </span>
      </Collapse>
      <Collapse label={<h1>Label</h1>} isOpen={openState['2']} onClickLabel={() => toggleOpen('2')}>
        <span>
          ConContentContentContentContentContentContentContenttContentContentContentContentContentContentContentent
          ConContentContentContentContentContentContentContenttContentContentContentContentContentContentContentent
          ConContentContentContentContentContentContentContenttContentContentContentContentContentContentContentent
          ConContentContentContentContentContentContentContenttContentContentContentContentContentContentContentent
        </span>
      </Collapse>
    </div>
  );
};

export default {
  component: Collapse,
  title: 'Collapse',
  decorators: [withKnobs],
};
