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
      className={cls('fc-box', className, {
        'fc-box--justify-center': justify === 'Center',
        'fc-box--justify-end': justify === 'End',
        'fc-box--justify-between': justify === 'Between',
        'fc-box--align-center': align === 'Center',
        'fc-box--align-end': align === 'End',
        'fc-box--direction-col': direction === 'Column',
      })}
    >
      {children}
    </div>
  );
}
