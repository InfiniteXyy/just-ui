import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from './Modal';
import { Button } from '..';
import { action } from '@storybook/addon-actions';

export const Default = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Button
        content={'Open'}
        onClick={() => {
          action('open-modal')();
          setOpen(true);
        }}
      />
      <Modal
        isOpen={isOpen}
        onClose={() => {
          action('close-modal')();
          setOpen(false);
        }}
        maskCloseable
      >
        <h1>Modal</h1>
      </Modal>
    </div>
  );
};

export default {
  component: Modal,
  title: 'Modal',
  decorators: [withKnobs],
};
