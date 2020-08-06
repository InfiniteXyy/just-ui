import React, { useCallback, useState } from 'react';
import cls from 'classnames';
import './Modal.scss';
import { useWatch } from '../shared';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maskCloseable?: boolean;
}

export default (props: IModalProps): JSX.Element => {
  const { isOpen, onClose, maskCloseable, children } = props;
  const [fadeMode, setFadeMode] = useState<'fadeIn' | 'fadeOut' | 'none'>('none');

  useWatch(isOpen, (open) => {
    if (open) {
      setFadeMode('fadeIn');
    } else {
      setFadeMode('fadeOut');
    }
  });

  const onClickMask = useCallback(() => {
    if (maskCloseable && isOpen) {
      onClose();
    }
  }, [onClose, maskCloseable, isOpen]);

  return (
    <>
      <div className={cls('tc-modal__content', { 'tc-modal__content--hidden': !isOpen })}>{children}</div>
      {(isOpen || fadeMode !== 'none') && (
        <div
          onClick={onClickMask}
          onAnimationEnd={() => setFadeMode('none')}
          className={cls('tc-modal__overlay', {
            'tc-modal__overlay--enter': fadeMode === 'fadeIn',
            'tc-modal__overlay--leave': fadeMode === 'fadeOut',
          })}
        />
      )}
    </>
  );
};
