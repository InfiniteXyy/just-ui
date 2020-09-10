import React, { useCallback, useMemo, useState } from 'react';
import './Popover.scss';
import { Fade } from '../../utils';

interface PopoverProps {
  component: JSX.Element;
  children: React.ReactChild;
  display?: 'Left' | 'Right' | 'Top' | 'Bottom';
}

export default function Popover(props: PopoverProps): JSX.Element {
  const { children, component, display = 'Right' } = props;
  const [isHover, setHover] = useState(false);
  const [targetPos, setTargetPos] = useState<DOMRect | null>(null);
  const popoverPos = useMemo(() => {
    if (!targetPos || typeof document === 'undefined') return {};
    const { clientWidth, clientHeight } = document.documentElement;
    switch (display) {
      case 'Right':
        return {
          left: targetPos.right + 10,
          top: targetPos.top,
        };
      case 'Left':
        return {
          right: clientWidth - targetPos.left + 10,
          top: targetPos.y,
        };
      case 'Top':
        return {
          bottom: clientHeight - targetPos.top + 10,
          left: targetPos.x,
        };
      case 'Bottom':
        return {
          top: targetPos.bottom + 10,
          left: targetPos.x,
        };
      default:
        return {};
    }
  }, [display, targetPos]);

  const onMouseOver = useCallback((e: MouseEvent) => {
    setHover(true);
    setTargetPos((e.target as HTMLElement)?.getBoundingClientRect());
  }, []);

  const onMouseOut = useCallback(() => setHover(false), []);

  return (
    <>
      {React.cloneElement(children as React.ReactElement, { onMouseOver, onMouseOut })}

      <Fade visible={isHover}>
        <div className="jt-popover" style={popoverPos}>
          {component}
        </div>
      </Fade>
    </>
  );
}
