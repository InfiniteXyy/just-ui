import React, { useEffect, useState } from 'react';
import cls from 'classnames';
import { Fade } from '../../utils';
import './Dropdown.scss';

interface DropdownProps {
  overlay: React.ReactElement;
  children: ((isOpen: boolean) => React.ReactElement) | React.ReactElement;
}

export default function Dropdown(props: DropdownProps): JSX.Element {
  const { overlay, children } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredTrigger, setHoveredTrigger] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(false);

  useEffect(() => {
    if (!menuOpen && hoveredTrigger) setMenuOpen(true);
    if (menuOpen && !hoveredTrigger && !hoveredMenu) setMenuOpen(false);
  }, [menuOpen, hoveredMenu, hoveredTrigger]);

  return (
    <div>
      <div
        onMouseEnter={() => setHoveredTrigger(true)}
        onMouseLeave={() => setHoveredTrigger(false)}
        className={cls('fc-dropdown-trigger', {
          'fc-dropdown-trigger--hover': menuOpen,
        })}
      >
        {typeof children === 'function' ? children(menuOpen) : children}
      </div>
      <Fade visible={menuOpen}>
        {React.cloneElement(overlay, {
          onMouseEnter: () => setHoveredMenu(true),
          onMouseLeave: () => setHoveredMenu(false),
        })}
      </Fade>
    </div>
  );
}

interface DropdownMenuItemProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children: React.ReactNode;
}

function DropDownMenuItem(props: DropdownMenuItemProps): JSX.Element {
  const { children, className: _className, ...others } = props;
  return (
    <li className={cls('fc-dropdown-menu__item', _className)} {...others}>
      {children}
    </li>
  );
}

interface DropdownMenuProps
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  children: React.ReactNode;
}
function DropDownMenu(props: DropdownMenuProps): JSX.Element {
  const { children, className: _className, ...others } = props;
  return (
    <ul className={cls('fc-dropdown-menu', _className)} {...others}>
      {children}
    </ul>
  );
}

Dropdown.Menu = DropDownMenu;
Dropdown.MenuItem = DropDownMenuItem;
