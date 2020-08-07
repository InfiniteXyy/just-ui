import React from 'react';
import './Card.scss';

interface ICardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  shadow?: 'Small';
}

export default (props: ICardProps): JSX.Element => {
  const { children, ...others } = props;
  return (
    <div className="tc-card" {...others}>
      {children}
    </div>
  );
};
