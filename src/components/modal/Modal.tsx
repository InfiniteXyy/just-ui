import React, { useCallback } from 'react';
import './Modal.scss';
import { Fade, FadeSlide } from '../../utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maskCloseable?: boolean;
}

export default function Modal(props: ModalProps): JSX.Element {
  const { isOpen, onClose, maskCloseable, children } = props;
  const onClickMask = useCallback(() => {
    if (maskCloseable && isOpen) {
      onClose();
    }
  }, [onClose, maskCloseable, isOpen]);

  return (
    <>
      <Fade visible={isOpen}>
        <div onClick={onClickMask} className="tc-modal__overlay" />
      </Fade>
      <FadeSlide visible={isOpen}>
        <div className="tc-modal__content">{children}</div>
      </FadeSlide>
    </>
  );
}
