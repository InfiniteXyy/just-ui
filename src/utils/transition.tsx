import React, { useEffect, useRef, useState } from 'react';
import cls from 'classnames';
import { useWatch } from './hooks';

export interface TransitionProps {
  visible: boolean;
  children: React.ReactChild;
  cssPrefix: string;
}

type AnimStatus = 'None' | 'Begin' | 'MoveIn' | 'Finished' | 'MoveOut';
const DEFAULT_TRANSITION_DURATION = 300;

const mapStateToClass = (cssPrefix: string, status: AnimStatus): string => {
  switch (status) {
    case 'Begin':
      return `${cssPrefix}-enter`;
    case 'MoveIn':
      return `${cssPrefix}-enter--active`;
    case 'Finished':
      return `${cssPrefix}-exit`;
    case 'MoveOut':
      return `${cssPrefix}-exit--active`;
    default:
      return '';
  }
};

export function Transition(props: TransitionProps): JSX.Element {
  const { visible, children, cssPrefix } = props;
  const completeTimer = useRef<number | null>(null);
  const [animStatus, setAnimStatus] = useState<AnimStatus>('None');

  useEffect(() => {
    if (animStatus === 'Begin') {
      if (typeof (window as any).requestIdleCallback === 'function') {
        (window as any).requestIdleCallback(() => setAnimStatus('MoveIn'));
      } else {
        setTimeout(() => setAnimStatus('MoveIn'), 0);
      }
    }
  }, [animStatus]);

  useWatch((moveIn) => {
    setAnimStatus(moveIn ? 'Begin' : 'MoveOut');
    completeTimer.current && clearTimeout(completeTimer.current);
    completeTimer.current = window.setTimeout(() => {
      setAnimStatus(moveIn ? 'Finished' : 'None');
    }, DEFAULT_TRANSITION_DURATION);
    return () => {
      completeTimer.current && clearTimeout(completeTimer.current);
    };
  }, visible);

  return (
    <>
      {animStatus !== 'None' &&
        React.cloneElement(children as React.ReactElement, {
          className: cls(
            (children as React.ReactElement).props.className || '',
            mapStateToClass(cssPrefix, animStatus)
          ),
        })}
    </>
  );
}

export function Fade(props: Omit<TransitionProps, 'cssPrefix'>): JSX.Element {
  const { visible, children } = props;
  return (
    <Transition visible={visible} cssPrefix="tc-fade">
      {children}
    </Transition>
  );
}

export function FadeSlide(props: Omit<TransitionProps, 'cssPrefix'>): JSX.Element {
  const { visible, children } = props;
  return (
    <Transition visible={visible} cssPrefix="tc-fade-slide">
      {children}
    </Transition>
  );
}
