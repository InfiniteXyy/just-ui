import React from 'react';
import { MdClose } from 'react-icons/md';

interface IconProps {
  // eslint-disable-next-line react/no-unused-prop-types
  type: 'Close';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Icon(props: IconProps): JSX.Element {
  return <MdClose />;
}
