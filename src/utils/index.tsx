/* eslint-disable import/prefer-default-export */

import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

// call onChange callback when target changes
export function useWatch<T>(onChange: (val: T) => (() => void) | void, target: T): void {
  const ref = useRef<T | undefined>();
  useEffect(() => {
    let onDestroy: (() => void) | void;
    if (ref.current !== undefined) {
      onDestroy = onChange(target);
    }
    ref.current = target;
    if (typeof onDestroy === 'function') {
      return onDestroy;
    }
    return undefined;
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [target]);
}

interface ITransitionProps {
  visible: boolean;
  children: JSX.Element;
  unmountOnExit?: boolean;
  onExit?: () => void;
  onExited?: () => void;
}

interface IFadeProps extends ITransitionProps {}

export const Fade = (props: IFadeProps): JSX.Element => {
  const { visible, children, ...others } = props;
  return (
    <CSSTransition in={visible} timeout={300} classNames="tc-fade" {...others}>
      {children}
    </CSSTransition>
  );
};

interface IFadeSlideProps extends ITransitionProps {}

export const FadeScale = (props: IFadeSlideProps): JSX.Element => {
  const { visible, children, ...others } = props;
  return (
    <CSSTransition in={visible} timeout={300} classNames="tc-fade-slide" {...others}>
      {children}
    </CSSTransition>
  );
};
