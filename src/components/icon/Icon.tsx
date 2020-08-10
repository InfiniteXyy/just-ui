import React from 'react';
import { MdClose } from 'react-icons/md';

interface IconProps {
  type: 'Close';
}
export default function Icon(props: IconProps): JSX.Element {
  return <MdClose />;
}
