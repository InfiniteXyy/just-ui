import React from 'react';
import './Input.scss';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export default (props: InputProps): JSX.Element => {
  const { ...others } = props;
  return <input className="tc-input" {...others} />;
};
