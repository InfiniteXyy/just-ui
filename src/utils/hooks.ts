import { useCallback, useEffect, useRef, useState } from 'react';

// call onChange callback when target changes
// eslint-disable-next-line import/prefer-default-export
export function useWatch<T>(onChange: (val: T) => (() => void) | void, target: T): void {
  const mounted = useRef<boolean>(false);
  useEffect(() => {
    let onDestroy: (() => void) | void;
    if (mounted.current) {
      onDestroy = onChange(target);
    }
    mounted.current = true;
    if (typeof onDestroy === 'function') {
      return onDestroy;
    }
    return undefined;
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [target]);
}

export function useRefresh(): () => void {
  const [, updateState] = useState({});
  return useCallback(() => updateState({}), []);
}
