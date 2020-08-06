import React from 'react';
import './Input.scss';

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export default (props: IInputProps): JSX.Element => {
  const { ...others } = props;
  return <input className="tc-input" {...others} />;
};
