/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from 'react';

// call onChange callback when target changes
export function useWatch<T>(target: T, onChange: (val: T) => (() => void) | void): void {
  const ref = useRef<T | undefined>();
  useEffect(() => {
    let onDestroy: (() => void) | void;
    if (ref.current !== undefined) {
      onDestroy = onChange(target);
    }
    ref.current = target;
    if (typeof onDestroy === 'function') {
      return onDestroy;
    }
  }, [target]);
}
