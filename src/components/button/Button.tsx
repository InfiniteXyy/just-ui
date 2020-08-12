import React from 'react';
import './Button.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  content: string;
  variant?: 'primary' | 'warning' | 'default';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps): JSX.Element {
  const { content, variant = 'default', ...others } = props;
  return (
    <button className={`fc-button fc-button--${variant}`} {...others}>
      {content}
    </button>
  );
}
