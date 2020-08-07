import React, { useCallback, useState } from 'react';
import cls from 'classnames';
import './Modal.scss';
import { Fade, FadeScale } from '../shared';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maskCloseable?: boolean;
}

export default (props: IModalProps): JSX.Element => {
  const { isOpen, onClose, maskCloseable, children } = props;
  const [isExiting, setExiting] = useState(false);

  const onClickMask = useCallback(() => {
    if (maskCloseable && isOpen) {
      onClose();
    }
  }, [onClose, maskCloseable, isOpen]);

  return (
    <>
      <Fade visible={isOpen} unmountOnExit>
        <div onClick={onClickMask} className="tc-modal__overlay" />
      </Fade>
      <FadeScale visible={isOpen} onExit={() => setExiting(true)} onExited={() => setExiting(false)}>
        <div className={cls('tc-modal__content', { 'tc-modal__content--hidden': !isOpen && !isExiting })}>
          {children}
        </div>
      </FadeScale>
    </>
  );
};
