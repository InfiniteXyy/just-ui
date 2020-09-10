import React from 'react';
import cls from 'classnames';
import './Collapse.scss';

interface CollapseProps {
  isOpen: boolean;
  onClickLabel: () => void;
  label: JSX.Element;
  children: JSX.Element;
}

export default function Collapse(props: CollapseProps): JSX.Element {
  const { isOpen, onClickLabel, label, children } = props;
  return (
    <>
      <div onClick={onClickLabel} className={cls('jt-collapse__label', { 'jt-collapse__label--open': isOpen })}>
        {label}
      </div>
      <div className={cls('jt-collapse__content', { 'jt-collapse__content--open': isOpen })}>{children}</div>
    </>
  );
}
