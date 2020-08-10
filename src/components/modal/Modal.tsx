import React, { useCallback } from 'react';
import './Modal.scss';
import { MdClose } from 'react-icons/md';
import { Fade, FadeSlide, NoTransition } from '../../utils';
import { BoxProps } from '../box/Box';
import { Box } from '../index';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maskCloseable?: boolean;
  disableTransition?: boolean;
}

function Modal(props: ModalProps): JSX.Element {
  const { isOpen, onClose, maskCloseable, disableTransition, children } = props;
  const onClickMask = useCallback(() => {
    if (maskCloseable && isOpen) {
      onClose();
    }
  }, [onClose, maskCloseable, isOpen]);
  const TransitionOverlay = disableTransition ? NoTransition : Fade;
  const TransitionContent = disableTransition ? NoTransition : FadeSlide;

  return (
    <>
      <TransitionOverlay visible={isOpen}>
        <div onClick={onClickMask} className="tc-modal__overlay" />
      </TransitionOverlay>
      <TransitionContent visible={isOpen}>
        <div className="tc-modal__content">
          {children}
          <MdClose className="tc-modal__close-btn" onClick={onClose} />
        </div>
      </TransitionContent>
    </>
  );
}

Modal.Title = ({ children }: { children: string }): JSX.Element => {
  return <h1 className="tc-modal__title">{children}</h1>;
};

Modal.Body = ({ children, ...others }: BoxProps): JSX.Element => {
  return (
    <Box className="tc-modal__body" {...others}>
      {children}
    </Box>
  );
};

Modal.Footer = ({ children, ...others }: BoxProps): JSX.Element => {
  return (
    <Box className="tc-modal__footer" {...others}>
      {children}
    </Box>
  );
};

export default Modal;
