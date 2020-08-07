import React, { useCallback, useState } from 'react';
import cls from 'classnames';
import './Popover.scss';
import { CSSTransition } from 'react-transition-group';
import { Fade } from '../shared';

interface IPopoverProps {
  component: JSX.Element;
  children: React.ReactChild;
}

export default (props: IPopoverProps): JSX.Element => {
  const { children, component } = props;
  const [isHover, setHover] = useState(false);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const onMouseOver = useCallback((e: MouseEvent) => {
    setHover(true);
    const { x, y, width, height } = (e.target as HTMLElement)?.getBoundingClientRect() ?? {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    setTargetPos({ x, y, width, height });
  }, []);

  const onMouseOut = useCallback(() => setHover(false), []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onMouseOver, onMouseOut });
        }
        return null;
      })}

      <Fade visible={isHover} unmountOnExit>
        <div
          className="tc-popover"
          style={{
            left: targetPos.x + targetPos.width + 10,
            top: targetPos.y,
          }}
        >
          {component}
        </div>
      </Fade>
    </>
  );
};
