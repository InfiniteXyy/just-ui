import React from 'react';
import cls from 'classnames';
import './Box.scss';

export interface BoxProps {
  style?: React.CSSProperties;
  align?: 'Start' | 'Center' | 'End';
  justify?: 'Start' | 'Center' | 'End' | 'Between';
  direction?: 'Column' | 'Row';
  className?: string;
  children: React.ReactNode;
}

export default function Box(props: BoxProps): JSX.Element {
  const { direction = 'Row', align = 'Start', justify = 'Start', children, className, ...others } = props;
  return (
    <div
      {...others}
      className={cls('jt-box', className, {
        'jt-box--justify-center': justify === 'Center',
        'jt-box--justify-end': justify === 'End',
        'jt-box--justify-between': justify === 'Between',
        'jt-box--align-center': align === 'Center',
        'jt-box--align-end': align === 'End',
        'jt-box--direction-col': direction === 'Column',
      })}
    >
      {children}
    </div>
  );
}
