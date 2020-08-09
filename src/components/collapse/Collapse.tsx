import React from 'react';
import cls from 'classnames';
import './Collapse.scss';

interface CollapseProps {
  isOpen: boolean;
  onClickLabel: () => void;
  label: JSX.Element;
  children: JSX.Element;
}

export default (props: CollapseProps): JSX.Element => {
  const { isOpen, onClickLabel, label, children } = props;
  return (
    <>
      <div onClick={onClickLabel} className={cls('tc-collapse__label', { 'tc-collapse__label--open': isOpen })}>
        {label}
      </div>
      <div className={cls('tc-collapse__content', { 'tc-collapse__content--open': isOpen })}>{children}</div>
    </>
  );
};
