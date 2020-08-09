import React from 'react';
import cls from 'classnames';
import './Box.scss';

interface BoxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  layout?: 'Stack' | 'StackEnd' | 'Focus' | 'Aside';
  horizontal?: boolean;
  center?: boolean;
}

export default (props: BoxProps): JSX.Element => {
  const { horizontal, center, layout = 'Stack', children, ...others } = props;
  return (
    <div
      {...others}
      className={cls('tc-box', {
        'tc-box--horizontal': horizontal,
        'tc-box--center': center,
        'tc-box--stack': layout === 'Stack',
        'tc-box--stack-end': layout === 'StackEnd',
        'tc-box--focus': layout === 'Focus',
        'tc-box--aside': layout === 'Aside',
      })}
    >
      {children}
    </div>
  );
};
