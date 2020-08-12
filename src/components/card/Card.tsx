import React from 'react';
import './Card.scss';

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  shadow?: 'Small';
}

export default function Card(props: CardProps): JSX.Element {
  const { children, ...others } = props;
  return (
    <div className="fc-card" {...others}>
      {children}
    </div>
  );
}
