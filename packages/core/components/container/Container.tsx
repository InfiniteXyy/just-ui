import React from 'react';
import cls from 'classnames';
import './Container.scss';

interface IContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  layout?: 'Stack' | 'StackEnd' | 'Focus' | 'Aside';
  horizontal?: boolean;
  center?: boolean;
}

export default (props: IContainerProps): JSX.Element => {
  const { horizontal, center, layout = 'Stack', children, ...others } = props;
  return (
    <div
      {...others}
      className={cls('tc-container', {
        'tc-container--horizontal': horizontal,
        'tc-container--center': center,
        'tc-container--stack': layout === 'Stack',
        'tc-container--stack-end': layout === 'StackEnd',
        'tc-container--focus': layout === 'Focus',
        'tc-container--aside': layout === 'Aside',
      })}
    >
      {children}
    </div>
  );
};
