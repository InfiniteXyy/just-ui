import React from 'react';
import './Button.scss';

interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  content: string;
  variant?: 'primary' | 'warning' | 'default';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default (props: IButtonProps): JSX.Element => {
  const { content, variant = 'default', ...others } = props;
  return (
    <button className={`tc-button tc-button--${variant}`} {...others}>
      {content}
    </button>
  );
};
