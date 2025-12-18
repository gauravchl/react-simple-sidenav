import React, { useRef, useState, CSSProperties, ReactNode } from 'react';

export interface SideNavProps {
  style?: CSSProperties;
  navStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  itemHoverStyle?: CSSProperties;
  children?: ReactNode;
  showNav?: boolean;
  openFromRight?: boolean;
  onHideNav?: () => void;
  onShowNav?: () => void;
  title?: ReactNode;
  items?: ReactNode[];
}

const SideNav: React.FC<SideNavProps> = (props) => {
  const { style, navStyle, children, showNav, openFromRight, onHideNav } = props;

  const navEle = useRef<HTMLElement>(null);
  let startX: number;
  let currentX: number;
  let touchingSideNav: boolean;

  const hideNav = () => {
    onHideNav && onHideNav();
  };

  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    startX = currentX = e.touches[0].pageX;
    touchingSideNav = true;
    requestAnimationFrame(update);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!touchingSideNav) return;
    currentX = e.touches[0].pageX;
  };

  const onTouchEnd = () => {
    if (!touchingSideNav) return;
    touchingSideNav = false;
    const translateX = Math[openFromRight ? 'max' : 'min'](0, currentX - startX);
    if (navEle.current) {
      navEle.current.style.transform = '';
    }
    if (!openFromRight && translateX < 0) hideNav();
    if (openFromRight && translateX > 0) hideNav();
  };

  const update = () => {
    if (!touchingSideNav) return;
    requestAnimationFrame(update);
    const translateX = Math[openFromRight ? 'max' : 'min'](0, currentX - startX);
    if (navEle.current) {
      navEle.current.style.transform = `translateX(${translateX}px)`;
    }
  };

  const styles: { root: CSSProperties; nav: CSSProperties; overlay: CSSProperties } = {
    root: {
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      position: 'fixed',
      overflow: 'hidden',
      zIndex: 8,
      pointerEvents: showNav ? 'auto' : 'none',
      ...(style || {}),
    },
    nav: {
      position: 'relative',
      width: '90%',
      maxWidth: 400,
      height: '100%',
      background: '#FFF',
      boxShadow: '2px 0 12px rgba(0,0,0,0.4)',
      transform: showNav ? 'none' : `translateX(${openFromRight ? 102 : -102}%)`,
      transition: `transform ${showNav ? '0.33s' : '0.13s'} cubic-bezier(0,0,0.3,1)`,
      display: 'flex',
      willChange: 'transform',
      flexDirection: 'column',
      float: openFromRight ? 'right' : 'left',
      ...(navStyle || {}),
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      opacity: showNav ? 1 : 0,
      background: 'rgba(0,0,0,0.4)',
      transition: 'opacity 0.3s cubic-bezier(0, 0, 0.3, 1)',
      willChange: 'opacity',
    },
  };

  return (
    <aside style={styles.root}>
      <div style={styles.overlay} onClick={hideNav}></div>
      <nav
        style={styles.nav}
        onTransitionEnd={(e) => {
          (e.target as HTMLElement).style.transition = 'none';
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={navEle}
      >
        {children || <DefaultContent {...props} />}
      </nav>
    </aside>
  );
};

export interface MenuIconProps extends React.SVGProps<SVGSVGElement> {}

export const MenuIcon: React.FC<MenuIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    cursor="pointer"
    fill="#fff"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export { SideNav };
export default SideNav;

const DefaultContent: React.FC<SideNavProps> = (props) => {
  const { titleStyle, itemStyle, itemHoverStyle, title, items } = props;
  const [hoverItemKey, setHoverItemKey] = useState<number | undefined>();

  const handleItemHover = (enter: boolean, key?: number) => {
    if (enter && key !== undefined) return setHoverItemKey(key);
    setHoverItemKey(undefined);
  };

  const getItemStyle = (key: number): CSSProperties => {
    return {
      padding: '22px',
      cursor: 'pointer',
      backgroundColor: '#fff',
      ...(itemStyle || {}),
      ...(key === hoverItemKey ? itemHoverStyle || { backgroundColor: '#f5f5f5' } : {}),
    };
  };

  const titleStyles: CSSProperties = {
    background: '#E91E63',
    color: '#fff',
    fontWeight: 400,
    margin: 0,
    lineHeight: '82px',
    padding: 22,
    ...(titleStyle || {}),
  };

  return (
    <div>
      <h1 style={titleStyles}>{title || 'Simple SideNav'}</h1>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items ? (
          items.map((item, key) => (
            <li
              key={'item' + key}
              style={getItemStyle(key)}
              onMouseOver={() => handleItemHover(true, key)}
              onMouseOut={() => handleItemHover(false)}
            >
              {item}
            </li>
          ))
        ) : (
          <li key="item1" style={getItemStyle(1)}>
            Item 1
          </li>
        )}
      </ul>
    </div>
  );
};
