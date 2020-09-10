import React from 'react';
import { MdClose, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

interface IconProps {
  type: 'Close' | 'DropDown' | 'DropUp';
}

const IconMap: { [type in IconProps['type']]: React.ElementType } = {
  Close: MdClose,
  DropDown: MdArrowDropDown,
  DropUp: MdArrowDropUp,
};

export default function Icon(props: IconProps): JSX.Element {
  const { type } = props;
  const Element = IconMap[type];
  return <Element />;
}
