import React, { useState } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import Modal from './Modal';
import { Button } from '../index';
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
        disableTransition={boolean('disableTransition', false)}
        isOpen={isOpen}
        onClose={() => {
          action('close-modal')();
          setOpen(false);
        }}
        maskCloseable
      >
        <Modal.Title>Title</Modal.Title>
        <Modal.Body>
          <div>It is body.</div>
        </Modal.Body>
        <Modal.Footer direction="Row" justify="End">
          <Button content="Submit" variant="primary" />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default {
  component: Modal,
  title: 'Modal',
  decorators: [withKnobs],
};
