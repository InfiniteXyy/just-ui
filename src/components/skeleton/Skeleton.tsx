import React from 'react';
import './Skeleton.scss';

interface ISkeletonProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (props: ISkeletonProps): JSX.Element => {
  return (
    <div className="tc-skeleton">
      <div style={{ width: 300, height: 300, backgroundColor: 'rgba(0,0,0,0.2)' }} />
    </div>
  );
};
