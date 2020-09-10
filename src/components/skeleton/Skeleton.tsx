import React from 'react';
import './Skeleton.scss';

interface SkeletonProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Skeleton(props: SkeletonProps): JSX.Element {
  return (
    <div className="jt-skeleton">
      <div style={{ width: 300, height: 300, backgroundColor: 'rgba(0,0,0,0.2)' }} />
    </div>
  );
}
