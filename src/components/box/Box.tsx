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
      className={cls('tc-box', className, {
        'tc-box--justify-center': justify === 'Center',
        'tc-box--justify-end': justify === 'End',
        'tc-box--justify-between': justify === 'Between',
        'tc-box--align-center': align === 'Center',
        'tc-box--align-end': align === 'End',
        'tc-box--direction-col': direction === 'Column',
      })}
    >
      {children}
    </div>
  );
}
